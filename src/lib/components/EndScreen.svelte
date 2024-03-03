<script lang="ts">

	import { score } from "$lib/stores/game";
    import { standardScale } from "$lib/utils/transition";
	import Countup from "svelte-countup";
	import { fade, scale } from "svelte/transition";

    import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher();


    export let beatHighscore:boolean;
    export let oldHighscore:number;

    function restartGame() {
        dispatch("restart")
    }
</script>

<div
	class="end"
	in:scale={standardScale.in} out:scale={standardScale.out}
>
	<h1>Times Up!</h1>
	<h3 class="score">
		You scored: <span class="scorenumber"
			><Countup value={$score} duration={1000} /></span
		>
	</h3>
	{#if beatHighscore}
		<p in:fade={{ duration: 200 }}>
			And beat your highscore of {oldHighscore}!
		</p>
	{/if}
	<div
		class="buttons"
		in:scale={standardScale.in} out:scale={standardScale.out}
	>
		<a href="/" class="btn outline" role="button">Main menu</a>
		<button on:click={restartGame} class="btn">Play Again</button>
	</div>
</div>

<style>
	.score {
		font-size: 20px;
	}
	.scorenumber {
		font-family: var(--mono-font-family);
	}
	.end {
		padding: 50px 0px;
		min-height: 100%;
	}
	.buttons {
		padding: 20px 0px;
	}
</style>