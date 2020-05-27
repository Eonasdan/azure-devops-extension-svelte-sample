
<script>
    import "../../../node_modules/azure-devops-ui/Components/Button/Button.css";
    import "../../../node_modules/azure-devops-ui/Components/Page/Page.css";

    import Header from "./page.header.svelte";
    import TabBar from "./page.tab-bar.svelte";
    import Content from "./page.content.svelte";

    export let Orientation = "vertical";
    export let title = "Page";
    export let buttons = [];
    export let tabs = [];
</script>

<style>
    .bolt-page {
        width: 100%;
    }
</style>

<div class="bolt-page v-scroll-auto bolt-page-grey {Orientation == "vertical" ? "flex-column" : "flex-row"}">
    <Header {title} {buttons} />

    <TabBar {tabs} />

    <Content>
        <slot />
    </Content>
</div>
