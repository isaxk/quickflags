<script lang="ts">
    export let href:string = "#"

</script>
<a {href} class="text-xl font-medium px-8 py-4 my-1 rounded-md box-border block bg-teal-700 hover:bg-teal-600 w-max transition"><slot/></a>