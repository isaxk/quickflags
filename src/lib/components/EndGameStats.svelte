<script>
	import AnimatedNumber from './AnimatedNumber.svelte';
	import { gameScoreFormat, accuracyFormat } from '$lib/formats.js';
	import { getNewBadges, getUnlockedBadges } from '../achievments.js';
	import { fly } from 'svelte/transition';
	import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
	import { initializeApp } from 'firebase/app';
	import { firebaseConfig } from '$lib/firebase.js';

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	export let gameScore;
	export let highscore;
	export let signedIn;
	export let currentUser;
    export let accuracy;

	let beatHighscore = false;
	let newBadges = [];
	let unlockedBadges = [];
	let resultsSaved = false;
	let gamesPlayed;

	async function uploadResults() {
		var gamesPlayedRef = doc(db, 'gamesplayed', currentUser.uid);
		var highscoreRef = doc(db, 'highscore', currentUser.uid);
		await getDoc(gamesPlayedRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				gamesPlayed = docSnap.data().gamesPlayed + 1;
			} else {
				gamesPlayed = 1;
			}
			await setDoc(gamesPlayedRef, {
				gamesPlayed: gamesPlayed
			});
		});
		await getDoc(highscoreRef).then(async (docSnap) => {
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
		newBadges = getNewBadges(gamesPlayed, 0)
		resultsSaved = true;
	}
    if(signedIn) uploadResults();
</script>

<div class="stats">
	<div class="numbers">
		<div class="title">Results:</div>
		<div class="score" transition:fly={{ y: 40, duration: 350, delay: 600 }}>
			You scored: <AnimatedNumber delay={700} number={gameScore} format={gameScoreFormat} />
		</div>
		<div class="highscore" transition:fly={{ y: 40, duration: 350, delay: 1450 }}>
			{#if beatHighscore}
				And beat your highscore!
			{/if}
		</div>

		<div class="accuracy" transition:fly={{ y: 40, duration: 350, delay: 1920 }}>
			Accuracy: <AnimatedNumber delay={2320} number={accuracy} format={accuracyFormat} />%
		</div>
	</div>
	{#key newBadges}
		<div class="badges">
			<div class="title">New Badges:</div>
			<div class="badges-list">
				{#if newBadges.length > 0}
					{#each newBadges as badge}
						<div class="badge">
							<div class="name">{badge.name}</div>
							<div class="desc">{badge.desc}</div>
						</div>
					{/each}
				{:else}
					<div class="badge">None</div>
				{/if}
			</div>
		</div>
	{/key}
</div>
{#if signedIn}
	{#if resultsSaved}
		<div class="server"><i class="fa-solid fa-checkmark" /> Results Saved</div>
	{:else}
		<div class="server" aria-busy="true">
			Saving results to your account
		</div>
	{/if}
{:else}
	<div class="server"><a href="#">Sign In to save your results</a></div>
{/if}


<style>
    .title {
		margin-bottom: 20px;
		font-weight: 600;
	}
	.stats {
		width: max-content;
		margin: auto;
		display: grid;
		gap: 3rem;
		grid-template-columns: max-content 1fr;
		text-align: left;
	}
	.badges-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		text-align: left;
	}
    .server {
        margin-top: 40px;
    }
</style>