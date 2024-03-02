<script lang="ts">
	import { page } from "$app/stores";
	import {
		getAuth,
		GoogleAuthProvider,
		signInWithRedirect,
		signOut,
	} from "firebase/auth";
	import { timeRemaining, score, increment } from "$lib/local/stores";
	import { fade, crossfade, slide, fly } from "svelte/transition";
	import Countup from "svelte-countup";
	import { browser } from "$app/environment";

	export let currentUser: any;
	export let app;

	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const timeFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const scoreFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 5,
		maximumFractionDigits: 0,
	});
	const incrementFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 4,
		maximumFractionDigits: 0,
	});

	let previousScore = 0;

	$: if (browser) {
		window.setTimeout(() => (previousScore = $score), 1000);
	}

	function signIn() {
		signInWithRedirect(auth, provider);
	}
</script>

<div class="header-container">
	<nav class="header-content">
		<ul>
			<li><a href="/" class="contrast">QuickFlags</a></li>
		</ul>
		{#key $page.url.pathname}
			<ul>
				{#if $page.url.pathname !== "/play/local"}
					<li>
						<a href="https://github.com/isaxk/quickflags" class="secondary"
							>GitHub</a
						>
					</li>
					<li>
						<a href="https://www.isaxk.com" class="secondary">isaxk.com</a>
					</li>
					{#if currentUser}
						<li>
							<details class="dropdown">
								<summary class="outline secondary">
									<img src={currentUser.photoURL} alt="profile" />
								</summary>
								<ul dir="rtl">
									<li class="username">{currentUser.email.substring(0, currentUser.email.indexOf("@"))}</li>
									<li><a href="#">Profile</a></li>
									<li>
										<a href="#" on:click={() => signOut(auth)}>Sign Out</a>
									</li>
								</ul>
							</details>
						</li>
					{:else}
						<li>
							<button on:click={signIn}>Sign In</button>
						</li>
					{/if}
				{:else if $page.url.pathname === "/play/local" && $timeRemaining > 0}
					<li class="timeremaining">
						{timeFormat.format($timeRemaining / 1000)}
					</li>
					<li class="score">
						{#key $score}
							<span>{scoreFormat.format($score)}</span>
						{/key}
						{#key $increment}
							<div
								class="scoreincrement"
								in:fly={{ y: 300, duration: 300 }}
								out:fly={{ y: -10, duration: 100 }}
							>
								{#if $increment != 0}
									{#if $increment > 0}
										<span class="positive">
											+{incrementFormat.format($increment)}
										</span>
									{:else}
										<span class="negative">
											-{incrementFormat.format($increment)}
										</span>
									{/if}
								{/if}
							</div>
						{/key}
					</li>
				{/if}
			</ul>
		{/key}
	</nav>
</div>

<style>
	.header-container {
	}
	.header-content {
		max-width: 800px;
		margin: auto;
		padding: 20px 10px;
		box-sizing: border-box;
	}

	.timeremaining,
	.score {
		font-family: var(--mono-font-family);
		font-size: 18px;
	}
	.score {
		position: relative;
	}
	.scoreincrement {
		position: absolute;
		bottom: -5px;
		right: 10px;
	}
	@media screen and (max-width: 500px) {
		.header-content {
			padding: 10px;
		}
	}
	.positive {
		color: green;
	}
	.negative {
		color: red;
	}
	summary img {
		border-radius: 50%;
		height: 30px;
	}
	summary {
		padding: 5px 10px;
	}
	details {
		z-index: 1000;
	}
	.username {
		border-bottom: #a4a4a42c 1px solid;
		padding-bottom: 10px;
		margin-bottom: 10px;
	}
</style>
