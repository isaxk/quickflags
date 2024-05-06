<script lang="ts">
	import BackLink from "$lib/components/BackLink.svelte";
	import EndScreen from "$lib/components/game/EndScreen.svelte";
	import FlagDisplay from "$lib/components/game/FlagDisplay.svelte";
	import GameHeader from "$lib/components/game/GameHeader.svelte";
	import Header from "$lib/components/game/Header.svelte";
	import MainGame from "$lib/components/game/MainGame.svelte";
	import CountryInput from "$lib/components/game/input/CountryInput.svelte";
	import { countries } from "$lib/data/countries";
	import type { Country } from "$lib/types";
	import { onDestroy, onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { Howl, Howler } from "howler";
	import correctWav from "../../assets/sfx/correct.wav";
	import wrongMp3 from "../../assets/sfx/wrong.mp3";
	import { sfxEnabled } from "$lib/stores";

	let score: number = 0;
	let timeRemaining: number = 10;
	let increment: number | null = null;
	let isPenaltyPause: boolean = false;

	let startTime: EpochTimeStamp;
	let endTime: EpochTimeStamp;

	let timer: number;
	let mounted = false;

	let correctSfx = new Howl({
		src: [correctWav],
		volume: 0.2,
	});

	let wrongSfx = new Howl({
		src: [wrongMp3]
	});

	$: if($sfxEnabled && mounted) {
		Howler.volume(1);
	}
	else if(mounted) {
		Howler.volume(0);
	}

	function startTimer() {
		mounted = true;
		startTime = Date.now();
		endTime = startTime + timeRemaining * 1000;
		timer = setInterval(() => {
			timeRemaining = (endTime - Date.now()) / 1000;
			if (timeRemaining <= 0) clearInterval(timer);
		});
	}

	let currentCountry = chooseRandomCountry();

	function chooseRandomCountry() {
		var randomIndex = Math.floor(Math.random() * countries.length);
		return countries[randomIndex];
	}

	function nextCountry() {
		currentCountry = chooseRandomCountry();
	}

	function penaltyPause() {
		if (isPenaltyPause) return;
		isPenaltyPause = true;
		setTimeout(() => {
			isPenaltyPause = false;
			nextCountry();
		}, 2500);
	}

	function handleEnteredCountry(enteredCountry: Country) {
		if (enteredCountry === currentCountry) {
			correctSfx.play();
			nextCountry();
			var scoreCalc = 4000;
			increment = scoreCalc;
			setTimeout(() => {
				score += scoreCalc;
				increment = null;
			}, 500);
		} else {
			wrongSfx.play();
			penaltyPause();
		}
	}

	onMount(startTimer);

	onDestroy(() => clearInterval(timer));
</script>

{#if timeRemaining > 0}
	<Header>
		<GameHeader {score} {timeRemaining} {increment} />
	</Header>
	<MainGame>
		<FlagDisplay
			countryCode={isPenaltyPause ? null : currentCountry.code}
			{currentCountry}
		/>

		<CountryInput
			on:submit={(e) => handleEnteredCountry(e.detail.value)}
			on:skip={penaltyPause}
		/>
	</MainGame>
{:else}
	<Header>
		<div class="flex h-16 sm:h-32 items-center">
			<div in:fly={{ x: -10, duration: 300, delay: 3100 }} class="text-xl">
				<BackLink>Back</BackLink>
			</div>
		</div>
	</Header>
	<EndScreen {score} />
{/if}
