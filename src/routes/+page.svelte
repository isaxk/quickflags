<script>
	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		GoogleAuthProvider,
		signInWithPopup,
		onAuthStateChanged,
		signOut
	} from 'firebase/auth';
	import { firebaseConfig } from '$lib/firebase';
	import FlagBackground from '$lib/components/FlagBackground.svelte';

	import { fade, slide, fly } from 'svelte/transition';
	import Stats from '$lib/components/Stats.svelte';

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	let signedIn = false;
	let profileImageURL;
	let authenticated = false;

	function signIn() {
		signInWithPopup(auth, provider);
	}

	onAuthStateChanged(auth, (user) => {
		if (user) {
			signedIn = true;
			profileImageURL = user.photoURL;
		} else {
			signedIn = false;
		}
		setTimeout(() => {
			authenticated = true;
		}, 500);
	});

	function playAsGuest() {
		if (
			confirm(
				"Are sure you want to remain un-logged in? \n\nIt's as simple as linking your google account and will give you all these benifts:\n - Achievments\n - Highscores\n - Stats"
			)
		) {
			location = 'play';
		} else {
			return;
		}
	}
</script>

<svelte:head>
	<title>QuickFlags</title>
	<meta
		name="description"
		content="The fast-paced flag memory game. Name as many flags as you can in 45 seconds."
	/>
</svelte:head>

<header>
	<div class="left">
		<h3>QuickFlags</h3>
		<div class="creator">by <a href="https://www.isaxk.com">isaxk</a></div>
	</div>

	<div class="right">
		{#if signedIn}
			<a href="#" on:click={() => signOut(auth)} class="secondary outline" role="button">Sign Out</a
			>
			<div class="profile-image"><img src={profileImageURL} alt="Signed In" /></div>
		{/if}
	</div>
</header>

{#key authenticated}
	<main in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
		{#if authenticated}
			<div class="play-hero-container">
				<div class="play-hero">
					<div class="buttons">
						{#if signedIn}
							<a href="play" class="play-button" role="button"
								><i class="fa-solid fa-play" /> Play</a
							>
						{:else}
							<a href="#" on:click={signIn} class="play-button" role="button">
								<div class="left">
									<i class="fa-brands fa-google" />
								</div>
								<div class="right">
									<div class="main">Sign In</div>
									<div class="google">with Google</div>
								</div>
							</a>
							<br />
							<a
								href="#"
								on:click={() => {
									return playAsGuest();
								}}>or play as guest</a
							>
						{/if}
					</div>
				</div>
				<FlagBackground />
			</div>
			{#if signedIn}
				<Stats {app} />
			{:else}
				<br /><br />
				<h3>Sign In to see your stats</h3>
			{/if}
		{:else}
			<div class="play-hero-container">
				<div class="play-hero" aria-busy="true" />
				<FlagBackground />
			</div>
		{/if}
	</main>

	<footer>
		<div class="left">&copy; isaxk.com 2023</div>
		<div class="right">
			<a href="/info/privacy">Privacy Policy</a>
			<a href="https://www.isaxk.com">Creator</a>
			<a href="#">Report a bug</a>
		</div>
	</footer>
{/key}

<style>
	.play-button {
		min-width: 100px;
		border: 1px solid #11191f;
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		padding: 10px 20px;
		margin-bottom: -20px;
	}
	.play-hero-container {
		width: 100%;
		height: 300px;
		display: grid;
		place-items: center;
		position: relative;
		border-radius: 10px;
	}
	.play-hero {
		border-radius: 10px;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 100;
		display: grid;
		place-items: center;
		backdrop-filter: blur(6px);
		background-color: rgba(0, 0, 0, 0.211);
	}
	@media screen and (max-width: 570px) {
		.play-hero-container {
			height: 250px;
		}
	}
	@media (prefers-color-scheme: light) {
		.play-hero {
			background-color: rgba(255, 255, 255, 0.411);
		}
		.play-button {
			border-color: #fff;
		}
	}
	header {
		display: grid;
		grid-template-columns: 1fr max-content;
		align-items: center;
	}
	.profile-image img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.profile-image {
		padding-top: 2.5px;
	}
	header .right {
		display: grid;
		grid-template-columns: 1fr max-content;
		gap: 1rem;
	}
	header .right a {
		padding: 12px 16px;
		font-size: 16px;
	}
	.fa-google,
	.fa-play {
		margin-right: 10px;
	}
	.fa-google {
		font-size: 20px;
	}
	main {
		height: 100vh;
	}
	.left .creator {
		font-size: 18px;
		padding-left: 2.5;
	}
	footer {
		width: 100%;
		height: 100px;
		padding: 0px 0px;
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		gap: 1rem;
		font-size: 16px;
	}
	footer .right {
		text-align: right;
	}
	footer .right a {
		margin-left: 10px;
	}
	.google {
		font-size: 10px;
	}
</style>
