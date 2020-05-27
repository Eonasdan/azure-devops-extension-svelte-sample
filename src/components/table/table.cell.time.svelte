
<script>
    export let value = new Date();
</script>

<time
    aria-hidden="true"
    class="bolt-time-item white-space-nowrap"
    datetime={value.toISOString()}>
    {value.toLocaleString()}
</time>