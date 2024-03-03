<script lang="ts">

	import FlagBackground from "$lib/components/FlagBackground.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Countup from "svelte-countup";

	import { highscore, gamesPlayed } from "$lib/stores/stats";

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


<div class="grid">
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

</div>


<Footer />



<style>
	article {
		height: 200px;
	}
	.play-button {
		padding-right: 30px;
		padding-left: 30px;
	}
	.news {
		font-size: 80%;
	}
	.grid {
		grid-template-columns: 1fr 2fr;
	}
</style>
