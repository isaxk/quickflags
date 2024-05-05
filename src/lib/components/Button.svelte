<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let href: string = "#";
	export let style: "primary" | "secondary" = "primary";
	export let type: "button" | "submit" = "button";

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("click");
	}

	let css: string;
	$: {
		if (style === "primary") css = "bg-teal-700 hover:bg-teal-600";
		if (style === "secondary") css = "bg-gray-700 hover:bg-gray-600";
	}
</script>

{#if href !== "#"}
	<a
		{href}
		class="flex items-center text-xl h-full font-medium px-8 py-4 my-1 rounded-md box-border w-max transition {css}"
		><slot /></a
	>
{:else}
	<button
		on:click={handleClick}
		{type}
		class="flex items-center text-xl h-full font-medium px-8 py-4 my-1 rounded-md box-border w-max transition {css}"
		><slot /></button
	>
{/if}
