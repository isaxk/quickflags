<<<<<<< HEAD

<script lang="ts">
	import CountryInput from "$lib/components/CountryInput.svelte";
	import FlagImage from "$lib/components/FlagImage.svelte";
	import countries from "$lib/countries";
	import { onDestroy, onMount } from "svelte";
	import { timeRemaining, score, increment } from "$lib/stores";
	import { scale, fade } from "svelte/transition";
	import Countup from "svelte-countup";
	import { normalise } from "$lib/text";
	import { highscore, gamesPlayed } from "$lib/stats";
=======
<script lang="ts">
	import CountryInput from "$lib/components/CountryInput.svelte";
	import FlagImage from "$lib/components/FlagImage.svelte";
	import countries from "$lib/countries";
	import { onDestroy, onMount } from "svelte";
	import { timeRemaining, score, increment } from "$lib/stores";
    import { scale } from "svelte/transition";
    import Countup from "svelte-countup";

>>>>>>> 3dbfb5f (mvp)

	let enteredCountry: string = "";
	let currentCountry: {
		code: string;
		name: string;
		short: string;
		easy: number;
	};
	let timer: any;
	let endTime: number;
<<<<<<< HEAD
	let gameLength: number = 45000;
	let flagImageKey : number = 0;
	let beatHighscore : boolean = false;
	let oldHighscore : number = $highscore;
=======
>>>>>>> 3dbfb5f (mvp)

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
<<<<<<< HEAD
		flagImageKey++;
		currentCountry = countries[pickRandomCountry()];
		incorrectPause = false;
	};

	const startTimer = () => {
		endTime = Date.now() + gameLength;
=======
		currentCountry = countries[pickRandomCountry()];
	};

	const startTimer = () => {
		endTime = Date.now() + 45000;
>>>>>>> 3dbfb5f (mvp)
		timer = window.setInterval(() => {
			timeRemaining.set(endTime - Date.now());
		}, 10);
	};

	const endGame = () => {
		clearInterval(timer);
<<<<<<< HEAD
		if($score>$highscore) {
			highscore.set($score);
			window.setTimeout(()=>beatHighscore=true, 1500);
		}
		gamesPlayed.update(n=>n+1)
=======
>>>>>>> 3dbfb5f (mvp)
	};

	const startGame = () => {
		nextCountry();
		score.set(0);
<<<<<<< HEAD
		timeRemaining.set(gameLength);
		window.setTimeout(startTimer, 500);
	};

=======
		timeRemaining.set(45000);
		window.setTimeout(startTimer, 500);
	};

	const normalise = (value: string) => {
		value = value.toLowerCase();
		value = value.replace(/\s+/g, "");
		return value;
	};

>>>>>>> 3dbfb5f (mvp)
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
<<<<<<< HEAD
=======
		score.set(0);
		timeRemaining.set(45000);
>>>>>>> 3dbfb5f (mvp)
	});

	$: if ($timeRemaining <= 0) {
		endGame();
	}

<<<<<<< HEAD
	let incorrectPause = false;

	const handleSubmit = (e: any) => {
		if(incorrectPause) return;
		if(enteredCountry==="") {
			incorrectPause = true;
			flagImageKey++;
			window.setTimeout(nextCountry, 1500);
			return;
		}
=======
	$: console.log(enteredCountry);

	const handleSubmit = (e: any) => {
>>>>>>> 3dbfb5f (mvp)
		if (
			normalise(enteredCountry) === normalise(currentCountry.name) ||
			normalise(enteredCountry) === normalise(currentCountry.short)
		) {
			nextCountry();
			updateScore(4000);
		} else {
<<<<<<< HEAD
			incorrectPause = true;
			flagImageKey++;
			window.setTimeout(nextCountry, 1500);
=======
			nextCountry();
>>>>>>> 3dbfb5f (mvp)
		}
	};
</script>

{#if $timeRemaining > 0}
<<<<<<< HEAD
	<div
		class="game"
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
	>
		{#if currentCountry}
			<FlagImage {currentCountry} {incorrectPause} key={flagImageKey}/>
=======
	<div class="game" out:scale={{ duration: 300, start: 1.02, opacity: 0 }}>
		{#if currentCountry}
			<FlagImage countryCode={currentCountry.code} />

>>>>>>> 3dbfb5f (mvp)
			<CountryInput bind:value={enteredCountry} on:submit={handleSubmit} />
		{/if}
	</div>
{:else}
<<<<<<< HEAD
	<div
		class="end"
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
	>
		<h1>Times Up!</h1>
		<h3 class="score">
			You scored: <span class="scorenumber"
				><Countup value={$score} duration={1000} /></span
			>
		</h3>
		{#if beatHighscore}
		<p in:fade={{duration:200}}>And beat your highscore of {oldHighscore}!</p>
		{/if}
		<div
			class="buttons"
			in:scale={{ duration: 500, delay: 2000, start: 0.992, opacity: 0 }}
		>
			<a href="/" class="btn outline" role="button">Main menu</a>
			<button on:click={startGame} class="btn">Play Again</button>
		</div>
=======
	<div class="end" in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}>
		<h1>Times Up!</h1>
        <div class="score">
            You scored: <span class="scorenumber"><Countup value={$score} duration={1000}/></span>
        </div>
		
>>>>>>> 3dbfb5f (mvp)
	</div>
{/if}

<style>
<<<<<<< HEAD
	.score {
		font-size: 20px;
	}
	.scorenumber {
		font-family: var(--mono-font-family);
	}

	.end {
		padding: 50px 0px;
	}
	.game,
	.end {
		min-height: 100%;
	}
	.buttons {
		padding: 20px 0px;
	}
=======
    .score {
        font-size: 20px;
    }
    .scorenumber {
        font-family: var(--mono-font-family);
    }

    .end {
        padding: 50px 0px;
    }
>>>>>>> 3dbfb5f (mvp)
</style>
