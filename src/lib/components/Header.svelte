<script lang="ts">
	import { page } from "$app/stores";
	import { timeRemaining, score, increment } from "$lib/stores";
	import { fade, crossfade, slide, fly } from "svelte/transition";
	import Countup from "svelte-countup";
	import { browser } from "$app/environment";

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
</script>

<div class="header-container">
	<nav class="header-content">
		<ul>
			<li>QuickFlags</li>
		</ul>
		{#key $page.url.pathname}
			<ul in:fade={{ duration: 100, delay: 101 }} out:fade={{ duration: 100 }}>
				{#if $page.url.pathname === "/"}
					<li><a href="https://github.com/isaxk/quickflags">GitHub</a></li>
					<li><a href="https:/www.isaxk.com">isaxk.com</a></li>
				{:else if $page.url.pathname === "/play" && $timeRemaining > 0}
					<li class="timeremaining">
						{timeFormat.format($timeRemaining / 1000)}
					</li>
					<li class="score">
						{#key $score}
							<span
								><Countup value={$score} initial={previousScore} duration={250}
								></Countup></span
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
		bottom: -30px;
		right: 0px;
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
</style>
