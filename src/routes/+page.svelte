<script>
	import { initializeApp } from "firebase/app";
	import { gameLoaded, gameStarted } from "../lib/data-store";
	import {
		getAuth,
		GoogleAuthProvider,
		signInWithPopup,
	} from "firebase/auth";

	import {
		getFirestore,
		collection,
		doc,
		getDoc,
		setDoc,
		onSnapshot,
	} from "firebase/firestore";
	import { getAnalytics } from "firebase/analytics";
	import Game from "./Game.svelte";
	import { slide, fade } from "svelte/transition";
	import Stats from "../lib/Stats.svelte";
	const firebaseConfig = {
		apiKey: "AIzaSyCDeBiCu2q9_RRurOI-AtgNh3LN-QE25EA",
		authDomain: "flagzisaacboor.firebaseapp.com",
		projectId: "flagzisaacboor",
		storageBucket: "flagzisaacboor.appspot.com",
		messagingSenderId: "133359321350",
		appId: "1:133359321350:web:5edf48926518a8ddc19e87",
		measurementId: "G-KEPZWD43M0",
	};
	let currentUser;
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	let loggedin = false;
	let username;
	if (auth.currentUser) {
		loggedin = true;
		username = auth.currentUser.email.split("@")[0];
	}
	$: auth.onAuthStateChanged((user) => {
		if (user) {
			loggedin = true;
			username = user.email.split("@")[0];

			let unsub = onSnapshot(doc(db, "username", user.uid), () => {
				getDoc(doc(db, "username", user.uid)).then(async (docSnap) => {
					if (docSnap.exists()) {
						username = docSnap.data().username;
					} else {
						await setDoc(doc(db, "username", user.uid), {
							username: user.email.split("@")[0],
						});
						username: user.email.split("@")[0];
					}
				});
			});
		} else {
			loggedin = false;
		}
		currentUser=user;
	});
	$: username = username;
	function startGame() {
		gameLoaded.set(true);
	}

	let gameStartedLocal;
	let gameLoadedLocal;

	gameStarted.subscribe((value) => {
		gameStartedLocal = value;
	});
	gameLoaded.subscribe((value) => {
		gameLoadedLocal = value;
	});

	function changeUsername() {
		var newname = prompt("Enter new username: ");
		if (newname == null || newname == "" || newname == undefined) return;
		getDoc(doc(db, "username", currentUser.uid)).then(async (docSnap) => {
			await setDoc(doc(db, "username", currentUser.uid), {
				username: newname,
			});
		});
	}

	function guest() {
		if (
			confirm(
				"Are you sure you want to play as a guest? \n\nYour score won't be saved for you or anyone else to see!"
			)
		) {
			startGame();
		}
	}
	console.log(gameStartedLocal);
	console.log(gameStarted);
</script>

<svelte:head>
	<title>Flagz</title>
	<meta name="description" content="The best way to learn flags" />
</svelte:head>

<section>
	{#if !gameLoadedLocal}
		<div class="home" transition:fade>
			<div class="header">
				<div class="title">
					FlameFlags
				</div>
				<div class="acc" />
				<div class="acc">
					{#if loggedin}
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span class="settingsbtn" on:click={changeUsername}
							><i class="fa-solid fa-gear" /></span
						>

						<!-- svelte-ignore a11y-interactive-supports-focus -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							role="button"
							transition:fade
							class="secondary signout"
							on:click={() => {
								auth.signOut();
							}}>Sign Out</span
						>
					{/if}
				</div>
			</div>
			<div class="buttons">
				{#if !loggedin}
					<button
						class="primary"
						on:click={() => {
							signInWithPopup(auth, provider);
						}}>Sign In with Google</button
					>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<!-- <a href="#" class="guest" on:click={guest}
						>or play as guest</a
					> -->
				{:else}
					<button
						transition:fade
						on:click={() => {
							startGame();
						}}
						class="primary">Play as {username}</button
					>
				{/if}
			</div>
			<div class="stats">
				{#if loggedin}
					<h3>Your Stats:</h3>
					<Stats {app} />
				{:else}
					<h3>Your stats:</h3>
					Login to see your stats
				{/if}
			</div>
		</div>
	{:else}
		{#key !gameLoadedLocal}
			<div class="container" transition:fade>
				<Game {app} />
			</div>
		{/key}
	{/if}
</section>

<style>
	h1 {
		margin: 20px 0px 40px 0px;
	}
	.buttons button {
		margin: auto;
		width: fit-content;
		margin-bottom: 10px;
	}
	.buttons {
		margin: 120px 0px;
	}
	.guest {
		font-size: 16px;
		text-decoration: underline;
	}
	p {
		text-align: left;
	}
	.acc {
		text-align: right;
		display: grid;
		justify-content: right;
		grid-template-columns: 0.5fr 1.5fr;
	}
	.acc i {
		font-size: 25px;
	}
	.acc .settingsbtn {
		display: grid;
		place-items: center;
	}
	.signout {
		padding: 10px 20px;
		width: fit-content;
	}
	.stats {
		margin-top: 70px;
	}
	.container {
		position: relative;
		width: 100%;
		height: 100%;
		left: 0px;
	}
	.beta {
		background-color: rgba(255, 255, 0, 0.533);
		padding: 5px;
		border-radius: 5px;
		box-sizing: border-box;
		font-size: 0.8em;
		color: black;
	}
	.stats h3 {
		margin-bottom: 5px;
	}
	.settingsbtn {
		width: fit-content;
	}
</style>
