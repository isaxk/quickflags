<script lang="ts">
	import CountryInput from "$lib/components/CountryInput.svelte";
	import FlagImage from "$lib/components/FlagImage.svelte";
	import countries from "$lib/countries";
	import { onDestroy, onMount } from "svelte";
	import { timeRemaining, score, increment } from "$lib/stores";
    import { scale } from "svelte/transition";
    import Countup from "svelte-countup";


	let enteredCountry: string = "";
	let currentCountry: {
		code: string;
		name: string;
		short: string;
		easy: number;
	};
	let timer: any;
	let endTime: number;

	const timeFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const scoreFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 5,
		maximumFractionDigits: 0,
	});

	const pickRandomCountry = () => {
		var index = Math.floor(Math.random() * countries.length);
		return index;
	};

	const nextCountry = () => {
		currentCountry = countries[pickRandomCountry()];
	};

	const startTimer = () => {
		endTime = Date.now() + 45000;
		timer = window.setInterval(() => {
			timeRemaining.set(endTime - Date.now());
		}, 10);
	};

	const endGame = () => {
		clearInterval(timer);
	};

	const startGame = () => {
		nextCountry();
		score.set(0);
		timeRemaining.set(45000);
		window.setTimeout(startTimer, 500);
	};

	const normalise = (value: string) => {
		value = value.toLowerCase();
		value = value.replace(/\s+/g, "");
		return value;
	};

	const updateScore = (v: number) => {
		increment.set(0);
		increment.set(v);
		window.setTimeout(() => {
			increment.set(0);
			score.update((n) => n + v);
		}, 500);
	};

	onMount(startGame);

	onDestroy(() => {
		clearInterval(timer);
		score.set(0);
		timeRemaining.set(45000);
	});

	$: if ($timeRemaining <= 0) {
		endGame();
	}

	$: console.log(enteredCountry);

	const handleSubmit = (e: any) => {
		if (
			normalise(enteredCountry) === normalise(currentCountry.name) ||
			normalise(enteredCountry) === normalise(currentCountry.short)
		) {
			nextCountry();
			updateScore(4000);
		} else {
			nextCountry();
		}
	};
</script>

{#if $timeRemaining > 0}
	<div class="game" out:scale={{ duration: 300, start: 1.02, opacity: 0 }}>
		{#if currentCountry}
			<FlagImage countryCode={currentCountry.code} />

			<CountryInput bind:value={enteredCountry} on:submit={handleSubmit} />
		{/if}
	</div>
{:else}
	<div class="end" in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}>
		<h1>Times Up!</h1>
        <div class="score">
            You scored: <span class="scorenumber"><Countup value={$score} duration={1000}/></span>
        </div>
		
	</div>
{/if}

<style>
    .score {
        font-size: 20px;
    }
    .scorenumber {
        font-family: var(--mono-font-family);
    }

    .end {
        padding: 50px 0px;
    }
</style>
