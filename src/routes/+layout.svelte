<script>
	import "./styles.css";
	import "@picocss/pico";

	import { fly } from "svelte/transition";

	export let data;
</script>

<div class="app">
	{#key data.url}
		<main
			in:fly={{ x: -200, duration: 300, delay: 300 }}
			out:fly={{ x: 200, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
</div>

<style>
</style>
