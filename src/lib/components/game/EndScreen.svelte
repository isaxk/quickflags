<script lang="ts">
	import { goto } from "$app/navigation";
	import { format } from "$lib/utils/format";
	import { Howl } from "howler";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import scoreCountWav from "../../../assets/sfx/scorecount.wav";
	import newHighscoreMp3 from "../../../assets/sfx/newhighscore.mp3";
	import Button from "../Button.svelte";
	import Countup from "../Countup.svelte";
	import { Confetti } from "svelte-confetti";

	export let score: number;

	let highscore: number | null = null;
	let beatHighscore: boolean = false;
	let startCountup: boolean = false;
	let counterFinished: boolean = false;

	let correctSfx = new Howl({
		src: [scoreCountWav],
		volume: 0.5,
	});

	let highscoreSfx = new Howl({
		src: [newHighscoreMp3],
		volume: 0.2,
	});

	$: if (startCountup) {
		correctSfx.play();
	}

	$: if (counterFinished && beatHighscore) {
		window.setTimeout(()=>highscoreSfx.play(), 500);
		
	}

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
		if (localStorage.gamesCompleted) {
			localStorage.gamesCompleted = parseInt(localStorage.gamesCompleted) + 1;
		} else {
			localStorage.gamesCompleted = 1;
		}
	});

	function restartGame() {
		const thisPage = window.location.pathname;
		goto("/").then(() => goto(thisPage));
	}
</script>

{#if highscore !== null}
	<div class="p-20" in:fly={{ y: 25, duration: 300, delay: 400 }}>
		<div class="px-2 text-center">
			<h1 class="text-4xl font-bold my-5">Game over</h1>
			<h3
				class="text-xl mb-3"
				in:fly={{ y: -10, delay: 1200 }}
				on:introend={() => (startCountup = true)}
			>
				You scored: <span class="font-mono">
					{#if startCountup}
						<Countup
							value={score}
							duration={1000}
							format={true}
							formatFn={format.score}
							bind:finished={counterFinished}
						/>
					{:else}
						00000
					{/if}
				</span>
			</h3>
			{#if counterFinished}
				<div
					class="text-md mb-5 w-full flex justify-center"
					in:fly={{ y: 10, duration: 300, delay: 500 }}
				>
					{#if beatHighscore}
						<div class="w-full">
							<div class="w-full flex justify-items-center">
								<div class="w-full flex justify-center">
									<Confetti
										delay={[800, 1025]}
										fallDistance="50px"
										x={[-1, 1]}
										y={[0.1, 2]}
									/>
								</div>
							</div>
							And beat your highscore of:
							<span class="font-mono">{highscore}</span>
						</div>
					{/if}
				</div>
				<div
					in:fly={{ y: 10, duration: 300, delay: beatHighscore ? 1500 : 800 }}
				>
					<div class="flex justify-center mt-7">
						<Button on:click={restartGame}>Play Again</Button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
