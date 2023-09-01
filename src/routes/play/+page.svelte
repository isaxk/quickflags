<script>
	import GameHeader from '$lib/components/GameHeader.svelte';
	import FlagImage from '$lib/components/FlagImage.svelte';
	import CountryInput from '$lib/components/CountryInput.svelte';
	import countries from '$lib/countries';
    import { clean } from "$lib/text";
	import Message from '$lib/components/Message.svelte';
	import { slide } from 'svelte/transition';

	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		GoogleAuthProvider,
		signInWithPopup,
		onAuthStateChanged,
		signOut
	} from 'firebase/auth';
	import { firebaseConfig } from '$lib/firebase';
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	let signedIn = false;
	let profileImageURL = null;
	let selectedCountry = null;
	let gameScore = 0;
	let timeRemaining = 45.0;
	let currentCountyData = getRandomCounty();
	let messageContent = '';
	let currentMessageTimeout;
	let gameEnded = false;
	let startTimeStamp = 0;
	let endTimeStamp = 0;
	let timer;
    let questionHistory = [];

	onAuthStateChanged(auth, (user) => {
		if (user) {
			signedIn = true;
			profileImageURL = user.photoURL;
		} else {
			signedIn = false;
		}
	});

	function getRandomCounty() {
		var randomIndex = Math.floor(Math.random() * countries.length);
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

	function endGame() {
		gameEnded = true;
        console.log(questionHistory);
		clearInterval(timer);
	}

    function restartGame() {
        gameEnded = false;
        gameScore=0;
        questionHistory=[];
        nextCounty();
        startTimer();
    }

	function startTimer() {
		startTimeStamp = Date.now();
		endTimeStamp = startTimeStamp + 45000;
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

	function handleSelectedCounty(e) {
		if (e) {
            var correct=false;
			if (
				clean(e) == clean(currentCountyData.name) ||
				clean(e) == clean(currentCountyData.short)
			) {
				sendMessage(currentCountyData.name + ' was correct!');
				gameScore += 4000;
                correct=true;
			} else if (e == 'Skipped') {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			} else {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			}
            currentCountyData.isCorrect=correct;
            currentCountyData.answered=e;
            questionHistory.push(currentCountyData);
			selectedCountry = null;
			nextCounty();
		}
	}

	startTimer();

	$: handleSelectedCounty(selectedCountry);
</script>

<GameHeader {timeRemaining} {gameScore} {profileImageURL} />

{#key gameEnded}
	<main in:slide={{ y: 40, duration: 350 }} out:slide={{ y: 40, duration: 300 }}>
		{#if gameEnded}
			<div class="endScreen">
				<h2>Game Over</h2>
                You scored: {gameScore}
                <div class="buttons">
                    <a href="#" on:click={restartGame} role="button">Play again</a>
                    <a href="/" role="button" class="outline">Back to home</a>
                </div>
                
			</div>
		{:else}
			<FlagImage src="/flags/{currentCountyData.code.toLowerCase()}.svg" />
			<Message {messageContent} />
			<CountryInput bind:selectedCountry />
		{/if}
	</main>
{/key}

<style>
    .endScreen {
        text-align: center;
    }
    .buttons {
        padding: 40px 0px;
    }
</style>
