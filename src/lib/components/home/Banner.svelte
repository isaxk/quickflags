<script lang="ts">
    export let href: string = "#";
</script>

<a {href} class="w-full grid place-content-center h-16 bg-teal-900">
    <div>
        <slot />
    </div>
</a>
