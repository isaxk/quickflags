<script>
	import GameHeader from '$lib/components/GameHeader.svelte';
	import FlagImage from '$lib/components/FlagImage.svelte';
	import CountryInput from '$lib/components/CountryInput.svelte';
	import countries from '$lib/countries';
	import Message from '$lib/components/Message.svelte';

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
        clearInterval(timer);
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
			if (e.toLowerCase() == currentCountyData.name.toLowerCase()) {
				sendMessage(currentCountyData.name + ' was correct!');
				gameScore += 4000;
			} else if (e == 'Skipped') {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			} else {
				sendMessage('Incorrect! Answer was ' + currentCountyData.name);
			}
			selectedCountry = null;
			nextCounty();
		}
	}

    startTimer();

	$: handleSelectedCounty(selectedCountry);
</script>

<GameHeader {gameScore} {timeRemaining} />

<main>
	{#if gameEnded}
        <h3>Game Over</h3>
    {:else}
		<FlagImage src="/flags/{currentCountyData.code.toLowerCase()}.svg" />
		<Message {messageContent} />
		<CountryInput bind:selectedCountry />
	{/if}
</main>
