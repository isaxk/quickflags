<script>
	import PageTransition from "$lib/components/PageTransition.svelte";
	import "../assets/css/main.css";

	export let data;
</script>

<PageTransition {data}>
	<main class="max-w-screen-md h-screen m-auto box-border">
		<slot />
	</main>
</PageTransition>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.900);
        color: theme(colors.slate.50);
        font-family: "Red Hat Display", sans-serif;
	}
</style>
