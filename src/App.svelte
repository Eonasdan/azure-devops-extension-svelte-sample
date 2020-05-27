<style>

</style>

<script>
    // Imports
    import "../node_modules/azure-devops-ui/Core/core.css";
    import "../node_modules/azure-devops-ui/Core/override.css";

    import * as SDK from "azure-devops-extension-sdk";
    import { getClient } from "azure-devops-extension-api";
    import { GitRestClient } from "azure-devops-extension-api/Git";

    import { onMount } from "svelte";
    import Page from "./components/page/page.svelte";
    import Table from "./components/table/table.svelte";

    // Init variables
    const projectName = "MyProject";
    const repoName = "my.repo";

    let rows = [];
    let selectedTabIndex = 0;

    const columnsDefinitions = [
        { name: "Commit Date" },
        { name: "Committer Name" },
        { name: "Comment" },
        { name: "Commit url" },
    ];

    const mainPageButtons = [
        {
            id: "refresh-button",
            text: "Refresh",
            href: "#",
            enabled: true,
            onClick: async () => {
                let commits = await fetchCommits();
                console.log(commits);
                updateRow(commits);
            },
        },
    ];

    const tabs = [
        {
            id: 0,
            name: "Overview commits",
            onClick: () => {
                selectedTabIndex = 0;
            },
        },
        {
            id: 1,
            name: "Help",
            onClick: () => {
                selectedTabIndex = 1;
            },
        },
    ];

    // Svelte lifecycle
    onMount(() => SDK.init());

    // Methods
    async function fetchCommits() {
        await SDK.ready();
        return await getClient(GitRestClient).getCommits(
            repoName,
            undefined,
            projectName,
        );
    }

    function updateRow(commits) {
        let tmpRow = [];

        commits.forEach((commit) => {
            tmpRow.push({
                commitDate: commit.committer.date,
                committerName: commit.committer.name,
                comment: commit.comment,
                commitUrl: commit.url,
            });
        });

        rows = tmpRow;
    }
</script>

<Page title="Hello AzureDevOps!" buttons="{mainPageButtons}" {tabs}>
    {#await fetchCommits()}
        <p>loading...</p>
    {:then _}
        {#if selectedTabIndex == 0}
            <Table title="{projectName} Commits" {columnsDefinitions} {rows} />
        {:else}
            <h1>Help me!</h1>
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</Page>
