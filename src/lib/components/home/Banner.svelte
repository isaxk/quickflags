<script lang="ts">
    export let href: string = "#";
</script>

<a
    {href}
    class="fixed left-0 w-full grid place-content-center h-14 bg-teal-900 bg-opacity-65"
>
    <div>
        <slot />
    </div>
</a>
