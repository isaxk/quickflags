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
			// ...
		} else {
			signedIn = false;
		}
		setTimeout(() => {
			authenticated = true;
		}, 500);
	});
</script>

<header>
	<h3>FlameFlags</h3>
	<div class="right">
		{#if signedIn}
			<a href="#" on:click={() => signOut(auth)} class="secondary outline" role="button"
				>Sign Out</a
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
							<a href="#" on:click={signIn} class="play-button" role="button"
								><i class="fa-solid fa-right-to-bracket" /> Sign In</a
							>
							<br>
							<a href="play">or play as guest</a>
						{/if}
					</div>
				</div>
				<FlagBackground />
			</div>
		{:else}
			<div class="play-hero-container">
				<div class="play-hero" aria-busy="true" />
				<FlagBackground />
			</div>
		{/if}
	</main>
{/key}

<style>
	.play-button {
		min-width: 100px;
		border: 1px solid #11191f;
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
	.right {
		display: grid;
		grid-template-columns: 1fr max-content;
		gap: 1rem;
	}
	.right a {
		height: 50px;
		padding: 10px 10px;
	}
	.fa-play {
		margin-right: 10px;
	}
	main {
		height: 100vh;
	}
</style>
