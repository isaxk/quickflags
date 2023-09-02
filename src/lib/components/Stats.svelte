<script>
	export let app;
	import { getFirestore, collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { gameScoreFormat, accuracyFormat, gamesPlayedFormat } from '$lib/formats';
	import AnimatedNumber from './AnimatedNumber.svelte';
	const auth = getAuth();
	const user = auth.currentUser;

	const db = getFirestore(app);
	let gamesPlayed = 0;
	let highscore = 0;
	let achievments = [];

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

	let unsubachievments = onSnapshot(doc(db, 'achievements', user.uid), () => {
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
	});

	$: achievments = achievments;
</script>

<div class="stats">
	<h3><i class="fa-solid fa-chart-simple" /> Stats:</h3>
	<div class="row-1">
		<!-- <div class="badges">
            <div class="title">Badges</div>
            <img
                src="/badges/10badge.png"
                alt="Score 10,000 points in one game"
                title="Score 10,000 points in one game"
            />
        </div> -->
	</div>
	<div class="row-2">
		{#key (highscore, gamesPlayed)}
			<div class="scores">
				<div class="title"><i class="fa-solid fa-play" /> Games played:</div>
				<AnimatedNumber number={gamesPlayed} format={gamesPlayedFormat} />
			</div>
			<div class="games" aria-disabled="true">
				<div class="title"><i class="fa-solid fa-star" /> Highest Score:</div>
				<AnimatedNumber number={highscore} format={gameScoreFormat} />
			</div>
		{/key}
	</div>
	<!-- <div class="row-3">
        <div class="title">Achievments</div>
        <div class="achievments">
            {#if achievments.firstplayer}
                <div class="badge">
                    <div class="name">The True OG</div>
                     First Ever Player
                </div>
            {/if}
            {#if achievments.flawless}
                <div class="badge">
                    <div class="name">Flawless</div>
                    Get 100% accuracy in a game with over 30,000 points
                </div>
            {/if}
            {#if highscore >= 50000}
                <div class="badge">
                    <div class="name">High Points V</div>
                    Get a score of 50,000!
                </div>
            {/if}
            {#if highscore >= 40000}
                <div class="badge">
                    <div class="name">High Points IV</div>
                    Get a score of 40,000!
                </div>
            {/if}
            {#if highscore >= 30000}
                <div class="badge">
                    <div class="name">High Points III</div>
                    Get a score of 30,000!
                </div>
            {/if}
            {#if highscore >= 15000}
                <div class="badge">
                    <div class="name">High Points II</div>
                    Get a score of 15,000!
                </div>
            {/if}
            {#if highscore >= 10000}
                <div class="badge">
                    <div class="name">High Points I</div>
                    Get a score of 5,000!
                </div>
            {/if}
            {#if gamesPlayed >= 500}
                <div class="badge">
                    <div class="name">Grinder V</div>
                    Play 500 games
                </div>
            {/if}
            {#if gamesPlayed >= 250}
                <div class="badge">
                    <div class="name">Grinder IV</div>
                    Play 250 games
                </div>
            {/if}
            {#if gamesPlayed >= 100}
                <div class="badge">
                    <div class="name">Grinder III</div>
                    Play 100 games
                </div>
            {/if}
            {#if gamesPlayed >= 45}
                <div class="badge">
                    <div class="name">Grinder II</div>
                    Play 45 games
                </div>
            {/if}
            {#if gamesPlayed >= 10}
                <div class="badge">
                    <div class="name">Grinder I</div>
                    Play 10 games
                </div>
            {/if}
            {#if gamesPlayed >= 1}
                <div class="badge">
                    <div class="name">Beginnings</div>
                    Play your first game
                </div>
            {/if}
        </div>
    </div> -->
</div>

<style>
	.stats {
		text-align: left;
		padding: 60px 10px 0px 10px;
		display: grid;
		gap: 10px;
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
