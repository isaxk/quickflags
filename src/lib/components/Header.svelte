<script lang="ts">
	import { page } from "$app/stores";
	import { timeRemaining, score, increment } from "$lib/stores";
	import { fade, crossfade, slide, fly } from "svelte/transition";
<<<<<<< HEAD
	import Countup from "svelte-countup";
	import { browser } from "$app/environment";
=======
>>>>>>> 3dbfb5f (mvp)

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
<<<<<<< HEAD

	let previousScore = 0;

	$: if (browser) {
		window.setTimeout(() => (previousScore = $score), 1000);
	}
</script>

<div class="header-container">
	<nav class="header-content">
		<ul>
			<li>QuickFlags</li>
		</ul>
		{#key $page.url.pathname}
			<ul>
				{#if $page.url.pathname === "/"}
					<li><a href="https://github.com/isaxk/quickflags" class="secondary">GitHub</a></li>
					<li><a href="https:/www.isaxk.com" class="secondary">isaxk.com</a></li>
					<!-- <li><details class="dropdown">
						<summary class="outline secondary">
						  <img src="https://lh3.googleusercontent.com/a/AAcHTtePeQf3jhyP4H4oocJBbzTfKfkqnx1XVJKLqAcPtuWYoVM=s96-c"/>
						</summary>
						<ul dir="rtl">
							<li><a href="#">Profile</a></li>
							<li><a href="#">Log Out</a></li>
						  </ul>
					  </details></li> -->
				{:else if $page.url.pathname === "/play" && $timeRemaining > 0}
					<li class="timeremaining">
						{timeFormat.format($timeRemaining / 1000)}
					</li>
					<li class="score">
						{#key $score}
							<span
								>{scoreFormat.format($score)}</span
							>
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
=======
</script>

<div class="header-container">
	<div class="header-content">
		<div class="title">QuickFlags</div>
		{#key $page.url.pathname}
			<div
				class="right"
				in:fade={{ duration: 100, delay: 101 }}
				out:fade={{ duration: 100 }}
			>
				{#if $page.url.pathname === "/"}
					<a href="https://github.com/isaxk/quickflags">GitHub</a>
					<a href="https:/www.isaxk.com">isaxk.com</a>
				{:else if $page.url.pathname === "/play" && $timeRemaining > 0}
					<div class="timeremaining">
						{timeFormat.format($timeRemaining / 1000)}
					</div>
					<div class="score">
						{scoreFormat.format($score)}
						{#key $increment}
							<div class="scoreincrement" in:fly={{y:300,duration:300}} out:fly={{y:-10,duration:100}}>
								{#if $increment != 0}
									{#if $increment > 0}
									<span class="positive">
										+{incrementFormat.format($increment)}
									</span>
									{:else}
									<span class="negative">
										-{incrementFormat.format($increment)}
									</span>
>>>>>>> 3dbfb5f (mvp)
									{/if}
								{/if}
							</div>
						{/key}
<<<<<<< HEAD
					</li>
				{/if}
			</ul>
		{/key}
	</nav>
=======
					</div>
				{/if}
			</div>
		{/key}
	</div>
>>>>>>> 3dbfb5f (mvp)
</div>

<style>
	.header-container {
<<<<<<< HEAD
=======
		height: 80px;
>>>>>>> 3dbfb5f (mvp)
	}
	.header-content {
		max-width: 800px;
		margin: auto;
		padding: 20px 10px;
		box-sizing: border-box;
<<<<<<< HEAD
	}

=======
		display: grid;
		grid-template-columns: 1fr max-content;
	}
	.title {
		font-size: 20px;
		font-weight: 500;
	}
	.right {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	.right a {
		color: white;
		text-decoration: none;
	}
>>>>>>> 3dbfb5f (mvp)
	.timeremaining,
	.score {
		font-family: var(--mono-font-family);
		font-size: 18px;
	}
<<<<<<< HEAD
	.score {
		position: relative;
	}
	.scoreincrement {
		position: absolute;
		bottom: -5px;
		right: 10px;
	}
=======
>>>>>>> 3dbfb5f (mvp)
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
<<<<<<< HEAD
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
=======
>>>>>>> 3dbfb5f (mvp)
</style>
