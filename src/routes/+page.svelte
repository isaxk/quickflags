<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Stats from "$lib/components/home/Stats.svelte";
	import { fade, slide, crossfade, draw, fly } from "svelte/transition";

	const [send, receive] = crossfade({});

	let showStats: boolean = false;

	function toggleStats() {
		showStats = !showStats;
	}
</script>

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

<div class="h-screen flex flex-col">
	<div class="flex justify-center items-center h-full text-center">
		<div class="flex justify-items-center flex-col">
			<div class="px-20">
				<h1 class="text-5xl font-bold mb-2">QuickFlags</h1>
				<h3 class="text-xl text-neutral-300">Fast paced, flag guessing game</h3>
				<div class="flex justify-center py-3 gap-4 items-center">
					<Button href="/play">Play</Button>
				</div>
			</div>
			{#if showStats}
				<div class="border-t-2 border-neutral-800 mb-1" transition:slide></div>
			{/if}
			<button on:click={toggleStats} class="p-3">
				{#if showStats}
					<i class="fa-solid fa-chevron-up"></i> Hide Stats
				{:else}
					<i class="fa-solid fa-chevron-down"></i> Show Stats
				{/if}
			</button>
			<div class="relative">
				{#if showStats}
					<Stats />
				{/if}
			</div>
		</div>
	</div>
	<div class="py-10 text-gray-400 flex justify-center gap-4">
		<div>isaxk.com</div>
		<div>Made with SvelteKit</div>
		<div>Project on Github</div>
	</div>
</div>
