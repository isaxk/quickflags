<script lang="ts">
	let hover: boolean = false;
</script>

<a
	href="/"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	class="flex gap-2 text-md text-gray-300 hover:text-white transition py-5"
>
	<div class="transition {hover ? "-translate-x-0.5" : ""}">&lt;</div> <slot /></a
>
