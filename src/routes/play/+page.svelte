<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { scale, fade } from "svelte/transition";

	import { normalise } from "$lib/utils/text";
	import { highscore, gamesPlayed } from "$lib/stores/stats";
	import {
		timeRemaining,
		score,
		increment,
		currentCountry,
		incorrectPause,
	} from "$lib/stores/game";

	import CountryInput from "$lib/components/game/CountryInput.svelte";
	import FlagDisplay from "$lib/components/game/FlagDisplay.svelte";
	import countries from "$lib/data/countries";
	import IncorrectPause from "$lib/components/game/IncorrectPause.svelte";
	import EndScreen from "$lib/components/game/EndScreen.svelte";
	import { standardScale } from "$lib/utils/transition";

	let enteredCountry: string = "";
	let timer: any;
	let endTime: number;
	let gameLength: number = 45000;
	let beatHighscore: boolean = false;
	let oldHighscore: number = $highscore;

	function pickRandomCountry() {
		var index = Math.floor(Math.random() * countries.length);
		return index;
	}

	function nextCountry() {
		incorrectPause.set(false);
		currentCountry.set(countries[pickRandomCountry()]);
	}

	function startTimer() {
		endTime = Date.now() + gameLength;
		timer = window.setInterval(() => {
			timeRemaining.set(endTime - Date.now());
		}, 10);
	}

	function endGame() {
		clearInterval(timer);
		if ($score > $highscore) {
			highscore.set($score);
			window.setTimeout(() => (beatHighscore = true), 1500);
		} else {
			beatHighscore = false;
		}
		gamesPlayed.set($gamesPlayed + 1);
	}

	function startGame() {
		incorrectPause.set(false);
		score.set(0);
		timeRemaining.set(gameLength);
		window.setTimeout(startTimer, 500);
	}

	function updateScore(v: number) {
		increment.set(0);
		increment.set(v);
		window.setTimeout(() => {
			increment.set(0);
			score.update((n) => n + v);
		}, 500);
	}

	currentCountry.set(countries[pickRandomCountry()]);

	onMount(startGame);

	onDestroy(() => {
		clearInterval(timer);
		currentCountry.set(null);
	});

	$: if ($timeRemaining <= 0) {
		endGame();
	}

	function handleSubmit() {
		if ($incorrectPause) return;
		if ($currentCountry === null) return;
		if (enteredCountry === "") {
			incorrectPause.set(true);
			window.setTimeout(nextCountry, 1500);
			return;
		}
		if (
			normalise(enteredCountry) === normalise($currentCountry.name) ||
			normalise(enteredCountry) === normalise($currentCountry.short)
		) {
			nextCountry();
			updateScore(4000);
		} else {
			incorrectPause.set(true);
			window.setTimeout(nextCountry, 1500);
		}
	}
</script>

{#if $timeRemaining > 0}
	<div class="game" in:scale={standardScale.in} out:scale={standardScale.out}>
		{#if $currentCountry}
			<FlagDisplay />
			<IncorrectPause />
			<CountryInput bind:value={enteredCountry} on:submit={handleSubmit} />
		{/if}
	</div>
{:else}
	<EndScreen on:restart={startGame} {oldHighscore} {beatHighscore} />
{/if}
