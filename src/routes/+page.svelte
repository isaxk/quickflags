<script lang="ts">
	import FlagBackground from "$lib/components/FlagBackground.svelte";
	import Countup from "svelte-countup";
	import { highscore, gamesPlayed } from "$lib/stats";
	import { onDestroy, onMount } from "svelte";

	let mounted: boolean = false;

	onMount(() => {
		mounted = true;
	});
	onDestroy(() => {
		mounted = false;
	});
</script>

<FlagBackground>
	<a href="/play" class="play-button" role="button">Play</a>
</FlagBackground>

<article class="news">
	<h3>v3 is here!</h3>
	<a href="/info/v3">What's New?</a>
	
</article>

<article>
	<h3>Stats</h3>
	{#if mounted && $gamesPlayed > 0}
		<h5>
			Highscore: <span class="mono"
				><Countup value={$highscore} duration={500} /></span
			>
		</h5>
		<h5>
			Games Played: <span class="mono"
				><Countup value={$gamesPlayed} duration={500} /></span
			>
		</h5>
	{:else}
		<h5>Start playing to see stats</h5>
	{/if}
</article>

<footer>
	<div class="copyright">Copyright &copy; isaxk.com 2024</div>
	<div class="right">
		<div class="version">v3.0.0</div>
	</div>
</footer>

<style>
	article {
		margin-top: 20px;
	}
	.play-button {
		padding-right: 30px;
		padding-left: 30px;
	}
	footer {
		width: 100%;
		margin: auto;
		box-sizing: border-box;
		padding: 50px 10px;
		font-size: 15px;
		display: grid;
		grid-template-columns: 1fr max-content;
	}
	.right {
		text-align: right;
		display: flex;
		justify-items: right;
	}
	.news {
		font-size: 80%;
	}
</style>
