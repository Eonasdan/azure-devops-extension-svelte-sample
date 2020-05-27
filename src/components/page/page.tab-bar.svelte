<script>
    import "../../../node_modules/azure-devops-ui/Components/Tabs/Tabs.css";

    export let tabs = [
        {
            id: 0,
            name: "Overview",
            onClick: () => {},
        }
    ];

    function selectTab(tab) {
        selectedTab = tab.id;

        tab.onClick();
    }

    let selectedTab = 0;
</script>

<div
    class="bolt-tabbar flex-row flex-center flex-noshrink sticky
    bolt-tabbar-grey"
>
    <div
        class="bolt-tabbar-tabs flex-grow flex-noshrink bolt-tabs flex-row tall"
        role="tablist"
    >
        {#each tabs as tab, i (tab.name)}
            <a
                aria-posinset="{i}"
                aria-selected="{selectedTab == i}"
                aria-setsize="3"
                class="bolt-tab focus-treatment flex-noshrink {selectedTab == i ? 'selected' : ''}"
                data-focuszone="focuszone-135"
                on:click="{() => selectTab(tab)}"
                id="{tab.id}"
                role="tab"
                tabindex="{i == 0 ? '0' : '-1'}"
            >
                <span class="bolt-tab-inner-container">
                    <span class="bolt-tab-text" data-content="{tab.name}">
                        {tab.name}
                    </span>
                </span>
            </a>
        {/each}
    </div>
</div>
