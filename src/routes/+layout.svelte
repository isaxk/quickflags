<script lang="ts">
	import "$lib/css/app.scss";

	import { page } from "$app/stores";
	import GameHeader from "$lib/components/game/GameHeader.svelte";
	import HomeHeader from "$lib/components/ui/HomeHeader.svelte";

	import { standardScale } from "$lib/utils/transition";
	import { scale, slide } from "svelte/transition";
	import HeaderContain from "$lib/components/ui/HeaderContain.svelte";

	export let data;
</script>

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

<div class="container">
	<HeaderContain>
		{#if $page.url.pathname !== "/play"}
			<HomeHeader />
		{:else}
			<GameHeader />
		{/if}
	</HeaderContain>

	{#key data.url}
		<div class="main" transition:slide>
			<slot />
		</div>
	{/key}
</div>

<style>
	.container {
		max-width: 1000px !important;
		padding: 0px 20px;
		box-sizing: border-box;
	}
	.main {
		padding: 0px 20px;
		box-sizing: border-box;
	}
</style>
