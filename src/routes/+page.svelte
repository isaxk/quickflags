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
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	let signedIn = false;
    let profileImageURL;

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
	});
</script>

<header>
	<h3>FlameFlags</h3>
    <div class="right">
        {#if signedIn}
        <div class="profile-image"><img src={profileImageURL} alt="Signed In"></div>
        {/if}
    </div>
</header>

<main>
	<div class="play-hero">
		<div class="buttons">
			{#if signedIn}
				<a href="play" class="play-button" role="button">Play</a>
				<a href="#" on:click={()=>signOut(auth)} class="play-button secondary outline" role="button"
					>Sign Out</a
				>
			{:else}
				<a href="#" on:click={signIn} class="play-button" role="button">Sign In</a>
				<a href="play" class="play-button secondary outline" role="button">Play as Guest</a>
			{/if}
		</div>
	</div>
</main>

<style>
	.play-button {
		min-width: 100px;
	}
	.play-hero {
		width: 100%;
		height: 300px;
		display: grid;
		place-items: center;
	}
    header {
        display: grid;
        grid-template-columns: 1fr max-content;
    }
    .profile-image img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>
