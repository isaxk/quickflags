<script>
	export let app;
	import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { gameScoreFormat, accuracyFormat, gamesPlayedFormat } from '$lib/formats';
	import AnimatedNumber from './AnimatedNumber.svelte';
	import { getUnlockedBadges } from '$lib/achievments.js';
	const auth = getAuth();
	const user = auth.currentUser;

	const db = getFirestore(app);
	let gamesPlayed = 0;
	let highscore = 0;
	let unlockedAchievments = [];

	let unsub = onSnapshot(doc(db, 'gamesplayed', user.uid), () => {
		getDoc(doc(db, 'gamesplayed', user.uid)).then(async (docSnap) => {
			if (docSnap.exists()) {
				gamesPlayed = docSnap.data().gamesPlayed;
			} else {
				await setDoc(doc(db, 'gamesplayed', user.uid), {
					gamesPlayed: 0,
					uid: user.uid
				});
				gamesPlayed = 0;
			}
		});
	});

	let unsubhighscore = onSnapshot(doc(db, 'highscore', user.uid), () => {
		getDoc(doc(db, 'highscore', user.uid)).then(async (docSnap) => {
			if (docSnap.exists()) {
				highscore = docSnap.data().highscore;
			} else {
				await setDoc(doc(db, 'highscore', user.uid), {
					highscore: 0,
					uid: user.uid
				});
				highscore = 0;
			}
		});
	});

	/* let unsubachievments = onSnapshot(doc(db, 'achievements', user.uid), () => {
		getDoc(doc(db, 'achievements', user.uid)).then(async (docSnap) => {
			if (docSnap.exists()) {
				achievments = docSnap.data();
			} else {
				await setDoc(doc(db, 'achievements', user.uid), {
					achievments: [],
					uid: user.uid
				});
				achievments = [];
			}
		});
		console.log(achievments);
	}); */

	$: {
		unlockedAchievments = getUnlockedBadges(gamesPlayed, highscore);
		console.log(unlockedAchievments);
	}
</script>

<div class="stats">
	<div class="left">
		<div class="title"><i class="fa-solid fa-chart-simple" /> Stats:</div>
		{#key (highscore, gamesPlayed)}
			<div class="scores">
				<div class="title">Games played:</div>
				<AnimatedNumber number={gamesPlayed} format={gamesPlayedFormat} />
			</div>
			<div class="games" aria-disabled="true">
				<div class="title">Highest Score:</div>
				<AnimatedNumber number={highscore} format={gameScoreFormat} />
			</div>
		{/key}
	</div>
	<div class="right">
		<div class="title">Achievments:</div>
		<div class="achievments">
			{#key unlockedAchievments}
				{#if unlockedAchievments.length > 0}
					{#each unlockedAchievments as badge}
						<div class="badge">
							<div class="name">{badge.name}</div>
							<div class="desc">{badge.desc}</div>
						</div>
					{/each}
				{/if}
			{/key}
		</div>
	</div>
</div>

<style>
	.stats {
		text-align: left;
		padding: 60px 10px 0px 10px;
		display: grid;
		gap: 3rem;
		display: grid;
		grid-template-columns: max-content 1fr;
	}
	.row-1 {
		display: grid;
		grid-template-columns: 1fr;
	}
	.row-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.title {
		margin-top: 20px;
		font-size: 24px;
	}
	.row-3 .title {
		margin-bottom: 40px;
	}
	.badges {
	}
	.badges img {
		width: 60px;
	}
	.badge {
		font-size: 13px;
		margin: 5px 0px;
	}
	.badge .name {
		font-size: 20px;
		font-weight: 500;
	}
	.achievments {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}
	.row-3 {
		margin-top: 50px;
	}
	h3 {
		margin-bottom: 0px;
	}
</style>
