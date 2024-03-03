<script lang="ts">
	import "$lib/css/app.scss";

	import { page } from "$app/stores";
	import GameHeader from "$lib/components/game/Header.svelte";
	import HomeHeader from "$lib/components/ui/Header.svelte";

	import { standardScale } from "$lib/utils/transition";
	import { scale } from "svelte/transition";

	export let data;
</script>

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

<div class="container">
	{#if $page.url.pathname !== "/play"}
		<HomeHeader />
	{:else}
		<GameHeader />
	{/if}

	{#key data.url}
		<div class="main" in:scale={standardScale.in} out:scale={standardScale.out}>
			<slot />
		</div>
	{/key}
</div>

<style>
	.container {
		max-width: 950px !important;
		padding: 0px 20px;
		box-sizing: border-box;
	}
</style>
