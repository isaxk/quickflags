<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import GameHeader from "$lib/components/GameHeader.svelte";
	import HomeHeader from "$lib/components/HomeHeader.svelte";
	import Header from "$lib/components/HomeHeader.svelte";
	import "$lib/css/app.scss";
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
		<div
			class="main"
			in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		>
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
