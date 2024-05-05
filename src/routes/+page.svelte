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

<div class="h-screen flex flex-col w-full">
	<div class="flex justify-center items-center h-full text-center">
		<div class="flex justify-items-center flex-col">
			<div class="sm:px-20">
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
	<div class="py-10 text-gray-400 flex flex-col gap-1 sm:flex-row sm:gap-4 justify-center text-center">
		<a href="https://www.isaxk.com">by isaxk</a>
		<a href="https://kit.svelte.dev">made with SvelteKit</a>
		<a href="https://github.com/isaxk/quickflags">Project on Github</a>
	</div>
</div>
