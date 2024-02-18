<script lang="ts">
	import FlagBackground from "$lib/components/FlagBackground.svelte";
</script>

<FlagBackground>
	<a href="/play" class="play-button">Play</a>
</FlagBackground>

<style>
	.play-button {
		color: white;
		background-color: var(--primary-accent-color);
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 18px;
	}
</style>
