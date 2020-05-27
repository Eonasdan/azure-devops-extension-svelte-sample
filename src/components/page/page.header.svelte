<script>
import "../../../node_modules/azure-devops-ui/Components/Header/Header.css";
import "../../../node_modules/azure-devops-ui/Components/HeaderCommandBar/HeaderCommandBar.css";
import "../../../node_modules/azure-devops-ui/Components/Surface/Surface.css";

  export let title = "Page";
  export let buttons = [
    {
      id: "refresh-button",
      text: "Refresh",
      href: "#",
      enabled: true,
      onClick: () => {alert("click")}
    }
  ];
</script>

<div
  class="bolt-header-with-commandbar bolt-header flex-row flex-noshrink
  flex-start bolt-header-no-spacing-defined">
  <div class="bolt-header-content-area flex-row flex-grow flex-self-stretch">
    <div class="bolt-header-title-area flex-column flex-grow scroll-hidden">
      <div class="bolt-header-title-row flex-row flex-baseline">
        <div aria-level="1" class="bolt-header-title title-m l" role="heading">
          {title}
        </div>
      </div>
    </div>
    <div
      class="flex-self-start bolt-header-commandbar flex-noshrink
      bolt-header-commandbar-no-right-padding bolt-button-group flex-row
      rhythm-horizontal-8"
      role="menubar">
      {#each buttons as button, i}
        <button
          aria-setsize="2"
          aria-posinset="{i + 1}"
          aria-roledescription="button"
          class="bolt-header-command-item-button bolt-button bolt-link-button {button.enabled ? "enabled" : ""} {i == 0 ? "primary" : ""} bolt-focus-treatment"
          data-focuszone="focuszone-385"
          data-is-focusable="true"
          href="{button.href}"
          id="{button.id}"
          role="menuitem"
          tabindex="{i}"
          on:click={button.onClick}>
          <span class="bolt-button-text body-m">{button.text}</span>
        </button>
      {/each}
    </div>
  </div>
</div>
