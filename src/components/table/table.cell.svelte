
<script>
    export let ariaColIndex = 0;
    export let ariaLabel = "";
</script>

<td aria-colindex="{ariaColIndex}" class="bolt-table-cell bolt-list-cell" role="gridcell">
  <div class="bolt-table-cell-content flex-row flex-center">
    <div class="flex">
      <span class="text-ellipsis" aria-label={ariaLabel}>
        <slot/>
      </span>
    </div>
  </div>
</td>
