<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "$lib/css/app.css";
	import "@picocss/pico";
	import { scale } from "svelte/transition";

	export let data;
</script>

<Header />


{#key data.url}
	<main
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
	>
		<slot />
	</main>
{/key}

<style>
	main {
		max-width: 800px;
		margin: auto;
        padding: 0px 10px;
        box-sizing: border-box;
        min-height: 100%;
	}
</style>
