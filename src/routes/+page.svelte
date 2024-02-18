<<<<<<< HEAD
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
	<h3>Welcome to v3!</h3>
	<h5>What's new?</h5>
	<ul>
		<li>Smoother Animations</li>
		<li>Refined UI</li>
		<li>Gameplay balancing</li>
		<li>Improved country autocomplete</li>
		<li>Use of native mobile keyboard</li>
	</ul>
	<h5>Servers?</h5>
	<p>
		The servers have been shut down due to their lack of purpose or usage.
		Highscores and data will now be stored locally. New servers may be launched
		in the future.
	</p>
	<a href="https://old.flags.pages.dev">Go back to 2.0</a>
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
=======
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
>>>>>>> 167f551 (Initial Commit)
