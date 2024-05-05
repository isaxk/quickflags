<script lang="ts">
	import { fly, slide } from "svelte/transition";
	import Countup from "../Countup.svelte";
	import { format } from "$lib/utils/format";
	import BackLink from "../BackLink.svelte";
	import Button from "../Button.svelte";
	import { onMount } from "svelte";
	import { goto, invalidateAll } from "$app/navigation";

	export let score: number;

	let highscore: number | null = null;
	let beatHighscore: boolean = false;
	let startCountup: boolean = false;

	onMount(() => {
		highscore = 0;
		if (localStorage.highscore) {
			highscore = localStorage.highscore;
		} else {
			localStorage.highscore = score;
			beatHighscore = true;
		}
		if (score > localStorage.highscore) {
			beatHighscore = true;
			localStorage.highscore = score;
		}
		if(localStorage.gamesCompleted) {
			localStorage.gamesCompleted = parseInt(localStorage.gamesCompleted) + 1;
		}
		else {
			localStorage.gamesCompleted = 1;
		}
	});

	function restartGame() {
		const thisPage = window.location.pathname;
        goto('/').then(
            () => goto(thisPage)
        );
	}
</script>

{#if highscore !== null}
	<div class="p-20" in:fly={{ y: 25, duration: 300, delay: 400 }}>
		<div class="px-2 text-center">
			<h1 class="text-4xl font-bold my-5">Game over</h1>
			<h3
				class="text-xl mb-3"
				in:fly={{ y: -10, delay: 1200 }}
				on:introstart={() => (startCountup = true)}
			>
				You scored: <span class="font-mono">
					{#if startCountup}
						<Countup value={score} duration={1000} format={true} />
					{:else}
						00000
					{/if}
				</span>
			</h3>
			<div class="text-md mb-5" in:fly={{ y: 10, duration: 300, delay: 2000 }}>
				{#if beatHighscore}
					And beat your highscore of: <span class="font-mono">{highscore}</span
					>!
				{/if}
			</div>
			<div
				in:fly={{ y: 10, duration: 300, delay: beatHighscore ? 2900 : 2350 }}
			>
				<div class="flex justify-center mt-7">
					<Button on:click={restartGame}>Play Again</Button>
				</div>
			</div>
		</div>
	</div>
{/if}
