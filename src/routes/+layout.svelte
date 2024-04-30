<script>
	import "../assets/css/main.css";
</script>

<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.900);
        color: theme(colors.slate.50);
        font-family: "Red Hat Display", sans-serif;
	}
</style>
