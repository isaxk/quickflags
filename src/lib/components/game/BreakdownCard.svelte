<script lang="ts">
    export let icon: string;
    export let color: string;
</script>

<div class="bg-{color}-800 h-full flex items-center gap-2 p-3 rounded-sm">
    <i class="fa-solid fa-{icon}"></i>
    <div class="text-nowrap overflow-hidden text-ellipsis">
        <slot />
    </div>
</div>
