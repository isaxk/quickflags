<script lang="ts">
	import type { Country, CountryHistoryItem } from '$lib/types';

	import CountryBox from '$lib/components/country-box/country-box.svelte';
	import FlagDisplay from '$lib/components/flag-display/flag-display.svelte';
	import GameBody from '$lib/components/layout/game-body.svelte';
	import BottomBarContainer from '$lib/components/bottom-bar/bottom-bar-container.svelte';
	import StatDisplayContainer from '$lib/components/bottom-bar/stat-display-container.svelte';
	import ScoreDisplay from '$lib/components/bottom-bar/score-display.svelte';
	import TimeDisplay from '$lib/components/bottom-bar/time-display.svelte';
	import NavBar from '$lib/components/bottom-bar/nav-bar.svelte';
	import EndScreen from '$lib/components/end-screen/end-screen.svelte';
	import Spinner from '$lib/components/ui/Spinner.svelte';
	import PlayPageTransition from '$lib/components/layout/play-page-transition.svelte';

	import { onDestroy, onMount } from 'svelte';
	import { countries } from '$lib/data/countries';
	import { fState } from '$lib/state/index.svelte';
	import { cache } from '$lib/util/cache';
	import { shuffle } from '$lib/util/shuffle';

	const gameLength: number = 60;

	let shuffledArray: Country[] = $state(shuffle(countries));
	let currentIndex: number = $state(0);
	let history: CountryHistoryItem[] = [];
	let loadedFirstFlag: boolean = $state(false);
	let currentCountry: Country = $derived(shuffledArray[currentIndex]);
	let endTime: number | null = $state(null);
	let score: number = $state(0);
	let gameFinished: boolean = $state(false);
	let overInterval: number;

	function startOverTimeInterval() {
		overInterval = setInterval(() => {
			gameFinished = endTime ? Date.now() > endTime : false;
			if (gameFinished) {
				clearInterval(overInterval);
			}
		}, 100);
	}

	$effect(() => {
		// Pre-caches the next flag to prevent janky loading
		cache(shuffledArray[currentIndex + 1].code);

		if (fState.current === 'restart') {
			shuffledArray = shuffle(countries);
			currentIndex = 0;
			loadedFirstFlag = false;
			endTime = null;
			gameFinished = false;
			score = 0;
			startOverTimeInterval();
			cache(shuffledArray[0].code).then(() => {
				loadedFirstFlag = true;
				endTime = Date.now() + gameLength * 1000;
			});
			fState.send('idle');
		}
	});

	onMount(() => {
		cache(shuffledArray[0].code).then(() => {
			loadedFirstFlag = true;
			endTime = Date.now() + gameLength * 1000;
		});
		startOverTimeInterval();
		fState.send('idle');
	});

	let timeout: number = 0;

	onDestroy(() => {
		clearInterval(overInterval);
		clearTimeout(timeout);
	});

	function handleNext(selected: Country) {
		clearTimeout(timeout);
		if (fState.current === 'incorrect' || fState.current === 'skip') {
			if (selected.code === currentCountry.code) {
				currentIndex++;
				fState.send('idle');
			}
		} else {
			let action: 'skip' | 'incorrect' | 'correct' = selected
				? selected.code == currentCountry.code
					? 'correct'
					: 'incorrect'
				: 'skip';
			fState.send(action);
			if (action === 'correct') {
				score += 1;
				currentIndex += 1;
				timeout = setTimeout(() => {
					fState.send('idle');
				}, 500);
			}
			history.push({ country: currentCountry, correct: action === 'correct' });
		}

		// setTimeout(
		// 	() => {
		// 		currentIndex++;
		// 	},
		// 	action === 'correct' ? 0 : 1450
		// );
	}
</script>

<!-- Prevent ios keyboard auto-scroll -->
<svelte:window on:scroll={() => window.scrollTo(0, 0)} />

<PlayPageTransition>
	{#if loadedFirstFlag && endTime && fState.current !== 'restart'}
		<GameBody>
			{#if gameFinished}
				<EndScreen {score} {history} />
			{:else}
				<FlagDisplay {currentCountry} />
				<CountryBox onnext={(selected) => handleNext(selected)} />
				<BottomBarContainer>
					<NavBar />
					<StatDisplayContainer>
						<ScoreDisplay {score} />
						<TimeDisplay {endTime} />
					</StatDisplayContainer>
				</BottomBarContainer>
			{/if}
		</GameBody>
	{:else}
		<Spinner />
	{/if}
</PlayPageTransition>
