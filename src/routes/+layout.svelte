<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "$lib/css/app.css";
<<<<<<< HEAD
	import "@picocss/pico";
=======
>>>>>>> 3dbfb5f (mvp)
	import { scale } from "svelte/transition";

	export let data;
</script>

<Header />


<<<<<<< HEAD
<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

{#key data.url}
	<div class="main"
=======
{#key data.url}
	<main
>>>>>>> 3dbfb5f (mvp)
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
	>
		<slot />
<<<<<<< HEAD
</div>
{/key}

<style>
	.main {
=======
	</main>
{/key}

<style>
	main {
>>>>>>> 3dbfb5f (mvp)
		max-width: 800px;
		margin: auto;
        padding: 0px 10px;
        box-sizing: border-box;
<<<<<<< HEAD
        min-height: 80vh;
		position: relative;
=======
        min-height: 100%;
>>>>>>> 3dbfb5f (mvp)
	}
</style>
