
<script>
    export let ariaColIndex = 0;
    export let colIndex = 0;
    export let name = "";
</script>

<th
    aria-colindex={ariaColIndex}
    aria-readonly="true"
    class="bolt-table-header-cell col-header-{colIndex}"
    tabindex="-1">
    <div class="bolt-table-header-cell-content flex-row">
        <div class="bolt-table-header-cell-text text-ellipsis body-s">
        <span>{name}</span>
        </div>
    </div>
</th>