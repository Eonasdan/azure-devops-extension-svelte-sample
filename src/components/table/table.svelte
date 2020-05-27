<script>
    import "../../../node_modules/azure-devops-ui/Components/Card/Card.css";
    import "../../../node_modules/azure-devops-ui/Components/Table/Table.css";

    import Header from "./table.header.svelte";
    import Column from "./table.column.svelte";
    import Cell from "./table.cell.svelte";
    import CellTime from "./table.cell.time.svelte";

    export let title = "My table";

    export let rows = [
        {
            commitDate: new Date(),
            committerName: "Jean michel",
            comment: "Initial commit",
            commitUrl: "http://www.mon-commit.fr/",
        },
    ];

    export let columnsDefinitions = [
        {
            name: "Commit Date",
        },
        {
            name: "Committer Name",
        },
        {
            name: "Comment",
        },
        {
            name: "Commit url",
        },
    ];
</script>

<style>
    .bolt-table {
        width: 100%;
    }
</style>

<div class="flex-grow bolt-table-card bolt-card flex-column depth-8 bolt-card-white">
    <Header {title} />
    <div class="bolt-card-content flex-row flex-grow">
        <div class="bolt-table-container flex-grow h-scroll-hidden">
            <table class="bolt-table bolt-table-show-lines bolt-list body-m relative scroll-hidden">
                <colgroup>
                    <col aria-hidden="true" style="width: 8px;" />
                    {#each columnsDefinitions as columnsDefinition, i}
                        <col style="" />
                    {/each}
                </colgroup>
                <thead>
                    <tr aria-rowindex="1" class="bolt-table-header-row">
                        {#each columnsDefinitions as columnsDefinition, i}
                            <Column
                                ariaColIndex={i + 1}
                                colIndex={i}
                                name={columnsDefinition.name} />
                        {/each}
                    </tr>
                </thead>
                <tbody class="relative">
                    {#each rows as row, i}
                        <tr>
                            <Cell
                                ariaColIndex="0"
                                ariaLabel={row.commitDate.toDateString()}>
                                <CellTime value={row.commitDate} />
                            </Cell>

                            <Cell
                                ariaColIndex="1"
                                ariaLabel={row.committerName}>
                                {row.committerName}
                            </Cell>

                            <Cell ariaColIndex="2" ariaLabel={row.comment}>
                                {row.comment}
                            </Cell>

                            <Cell ariaColIndex="3" ariaLabel={row.commitUrl}>
                                {row.commitUrl}
                            </Cell>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
