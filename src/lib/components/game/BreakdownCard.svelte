<script lang="ts">
    export let icon: string;
    export let css: string;
</script>

<div class="h-full flex items-center gap-2 p-3 rounded-sm {css}">
    <i class="fa-solid fa-{icon}"></i>
    <div class="text-nowrap overflow-hidden text-ellipsis">
        <slot />
    </div>
</div>
