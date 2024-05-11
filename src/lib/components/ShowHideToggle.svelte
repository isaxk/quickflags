<script lang="ts">
    export let text: string;
    let showSlot: boolean = false;

    function toggle() {
        showSlot = !showSlot;
    }
</script>

<button on:click={toggle} class="p-3">
    {#if showSlot}
        <i class="fa-solid fa-chevron-up"></i> Hide {text}
    {:else}
        <i class="fa-solid fa-chevron-down"></i> Show {text}
    {/if}
</button>

{#if showSlot}
    <slot />
{/if}
