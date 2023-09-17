<script>
	import GameHeader from '$lib/components/GameHeader.svelte';
	import FlagImage from '$lib/components/FlagImage.svelte';
	import CountryInput from '$lib/components/CountryInput.svelte';
	import EndTable from '$lib/components/EndTable.svelte';
	import countries from '$lib/countries';
	import { clean } from '$lib/text';
	import throttle from 'lodash/throttle';
	import { gameScoreFormat, accuracyFormat } from '$lib/formats';
	import Message from '$lib/components/Message.svelte';
	import { getUnlockedBadges } from '$lib/achievments.js';
	import { browser } from '$app/environment';
	import { slide, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { invalidateAll } from '$app/navigation';

	

	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		GoogleAuthProvider,
		signInWithPopup,
		onAuthStateChanged,
		signOut
	} from 'firebase/auth';
	import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

	import { firebaseConfig } from '$lib/firebase';
	import AnimatedNumber from '../../lib/components/AnimatedNumber.svelte';
	import EndGameStats from '../../lib/components/EndGameStats.svelte';
	import { onMount } from 'svelte';
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);
	const provider = new GoogleAuthProvider();

	let signedIn = false;
	let profileImageURL = null;
	let selectedCountry = '';
	let gameScore = 0;
	let timeRemaining = 45;
	let questionHistory = [];
	let currentCountyData = getRandomCounty();
	let messageContent = '';
	let currentMessageTimeout;
	let correctQuestions = 0;
	let gameEnded = false;
	let startTimeStamp = 0;
	let endTimeStamp = 0;
	let timer;
	let loadStats = false;
	let accuracy;
	let currentUser;
	let beatHighscore = false;
	let resultsSaved;

	function percentage(partialValue, totalValue) {
		return (100 * partialValue) / totalValue;
	}

	onAuthStateChanged(auth, (user) => {
		if (user) {
			currentUser = user;
			signedIn = true;
			profileImageURL = user.photoURL;
		} else {
			signedIn = false;
		}
	});

	function getRandomCounty() {
		var randomIndex = Math.floor(Math.random() * countries.length);
		for (var i = 0; i < questionHistory.length; i++ && questionHistory.length > 0) {
			if (countries[randomIndex].code == questionHistory[i].code) {
				return getRandomCounty();
			}
		}
		return countries[randomIndex];
	}

	function sendMessage(content) {
		if (currentMessageTimeout) {
			window.clearTimeout(currentMessageTimeout);
		}
		messageContent = content;
		currentMessageTimeout = window.setTimeout(() => {
			sendMessage('');
		}, 1500);
	}

	let questionTimeout;

	function nextCounty() {
		if (questionTimeout) clearInterval(questionTimeout);
		currentCountyData = getRandomCounty();
		console.log(currentCountyData);
	}

	let gamesPlayed = 0;
	let highscore = 0;

	let unlockedBadges = [];
	let newBadges = [];

	async function endGame() {
		clearInterval(timer);
		accuracy = percentage(correctQuestions, questionHistory.length);
		setTimeout(() => (loadStats = true), 100);
		console.log(gamesPlayed);
		console.log(newBadges);
		gameEnded = true;
	}

	function restartGame() {
		gameEnded = false;
		gameScore = 0;
		correctQuestions = 0;
		timeRemaining = 45;
		questionHistory = [];
		invalidateAll();
		nextCounty();
		startTimer();
	}

	function startTimer() {
		/* questionTimeout = setInterval(() => {
			handleTimeout();
		}, 1000); */
		startTimeStamp = Date.now();
		endTimeStamp = startTimeStamp + timeRemaining * 1000;
		timer = setInterval(() => {
			if (Date.now() >= endTimeStamp + 100) return;
			if (Date.now() >= endTimeStamp) {
				endGame();
				clearInterval(timer);
				timeRemaining = 0;
			} else {
				timeRemaining = (endTimeStamp - Date.now()) / 1000;
			}
		}, 10);
	}

	const handleSelectedCounty = throttle((e)=>{ 
		if (gameEnded) return;
		if (browser) {
			document.body.scrollIntoView();
		}
		if (e == '') return;
		if (e) {
			var correct = false;
			if (clean(e) == clean(currentCountyData.name) || clean(e) == clean(currentCountyData.short)) {
				sendMessage("Correct");
				gameScore += 4000;
				correctQuestions++;
				correct = true;
			} else if (e == 'Pass') {
				sendMessage("Incorrect!");
			} else {
				sendMessage("Incorrect!");
			}
			currentCountyData.isCorrect = correct;
			currentCountyData.answered = e;
			questionHistory.push(currentCountyData);
			selectedCountry = null;
			nextCounty();
		}
	},300);

	onMount(() => {
		startTimer();
	});

	$: handleSelectedCounty(selectedCountry);
</script>

<svelte:head><title>Playing Quick Flags</title></svelte:head>

<GameHeader {timeRemaining} {gameScore} {profileImageURL} />

{#key gameEnded}
	<main in:slide={{ y: 40, duration: 350, delay: 10 }} out:slide={{ y: -40, duration: 300 }}>
		{#if gameEnded}
			<div class="endScreen">
				<h2>Game Over</h2>
				{#if loadStats}
					<EndGameStats {gameScore} {signedIn} {accuracy} {currentUser} />
				{/if}
				<div class="buttons">
					<a href="#" on:click={restartGame} role="button"
						><i class="fa-solid fa-play" /> Play again</a
					>
					<a href="/" role="button" class="outline"><i class="fa-solid fa-house" /> Back to home</a>
				</div>

				<EndTable tableData={questionHistory} />
			</div>
		{:else}
			<FlagImage src="https://flagcdn.com/w320/{currentCountyData.code.toLowerCase()}.webp" />
			
			<CountryInput bind:selectedCountry {messageContent}/>
		{/if}
	</main>
{/key}

<svelte:body style="overflow-y: none;" />

<style>
	.endScreen {
		text-align: center;
	}
	.buttons {
		padding: 40px 0px;
	}
	main {
		overflow-y: hidden;
		height: 100%;
	}
</style>
