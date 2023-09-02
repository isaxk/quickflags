<script>
	import GameHeader from '$lib/components/GameHeader.svelte';
	import FlagImage from '$lib/components/FlagImage.svelte';
	import CountryInput from '$lib/components/CountryInput.svelte';
	import EndTable from '$lib/components/EndTable.svelte';
	import countries from '$lib/countries';
	import { clean } from '$lib/text';
	import { gameScoreFormat, accuracyFormat } from '$lib/formats';
	import Message from '$lib/components/Message.svelte';
	import { browser } from '$app/environment';
	import { slide, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

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
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);
	const provider = new GoogleAuthProvider();

	let signedIn = false;
	let profileImageURL = null;
	let selectedCountry = null;
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

	function nextCounty() {
		currentCountyData = getRandomCounty();
		console.log(currentCountyData);
	}

	function uploadResults() {
		var gamesPlayed = 0;
		var highscore = 0;
		var gamesPlayedRef = doc(db, 'gamesplayed', currentUser.uid);
		var highscoreRef = doc(db, 'highscore', currentUser.uid);
		getDoc(gamesPlayedRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				gamesPlayed = docSnap.data().gamesPlayed + 1;
			} else {
				gamesPlayed = 1;
			}
			await setDoc(gamesPlayedRef, {
				gamesPlayed: gamesPlayed
			});
		});
		getDoc(highscoreRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				highscore = docSnap.data().highscore;
				if (gameScore > highscore) {
					highscore = gameScore;
					beatHighscore = true;
				}
			} else {
				highscore = gameScore;
				beatHighscore = true;
			}
			if (beatHighscore) {
				await setDoc(highscoreRef, {
					highscore: highscore
				});
			}
		});
		resultsSaved = true;
	}

	function endGame() {
		gameEnded = true;
		if (signedIn) uploadResults();
		accuracy = percentage(correctQuestions, questionHistory.length);
		setTimeout(() => (loadStats = true), 100);
		console.log(questionHistory);
		clearInterval(timer);
	}

	function restartGame() {
		gameEnded = false;
		gameScore = 0;
		correctQuestions = 0;
		timeRemaining = 45;
		questionHistory = [];
		nextCounty();
		startTimer();
	}

	function startTimer() {
		startTimeStamp = Date.now();
		endTimeStamp = startTimeStamp + timeRemaining * 1000;
		timer = setInterval(() => {
			document.body.scrollIntoView();
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

	function handleSelectedCounty(e) {
		if (browser) {
			document.body.scrollIntoView();
		}
		if (e) {
			var correct = false;
			if (clean(e) == clean(currentCountyData.name) || clean(e) == clean(currentCountyData.short)) {
				sendMessage(currentCountyData.name + ' was correct!');
				gameScore += 4000;
				correctQuestions++;
				correct = true;
			} else if (e == 'Pass') {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			} else {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			}
			currentCountyData.isCorrect = correct;
			currentCountyData.answered = e;
			questionHistory.push(currentCountyData);
			selectedCountry = null;
			nextCounty();
		}
	}

	if (browser) {
		startTimer();
	}

	$: handleSelectedCounty(selectedCountry);
</script>

<GameHeader {timeRemaining} {gameScore} {profileImageURL} />

{#key gameEnded}
	<main in:slide={{ y: 40, duration: 350, delay: 10 }} out:slide={{ y: -40, duration: 300 }}>
		{#if gameEnded}
			<div class="endScreen">
				<h2>Game Over</h2>
				{#if loadStats}
					<div class="stats">
						<div class="score" transition:fly={{ y: 40, duration: 350, delay: 600 }}>
							You scored: <AnimatedNumber delay={700} number={gameScore} format={gameScoreFormat} /><br>
							{#if beatHighscore}
								And beat your highscore!
							{/if}
						</div>
						<div class="accuracy" transition:fly={{ y: 40, duration: 350, delay: 1450 }}>
							Accuracy: <AnimatedNumber delay={1920} number={accuracy} format={accuracyFormat} />%
						</div>
					</div>
					<br />
					{#if signedIn}
						{#if resultsSaved}
							<div class="server"><i class="fa-solid fa-checkmark" /> Results Saved</div>
						{:else}
						<div
							class="server"
							aria-busy="true"
							transition:fly={{ y: 40, duration: 350, delay: 1800 }}
						>
							Saving results to your account
						</div>
						{/if}
					{:else}
						<div class="server"><a href="#">Sign In to save your results</a></div>
					{/if}
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
			<FlagImage src="/flags/{currentCountyData.code.toLowerCase()}.svg" />
			<Message {messageContent} />
			<CountryInput bind:selectedCountry />
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
	}
</style>
