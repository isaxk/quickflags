<script lang="ts">
	import { page } from "$app/stores";
	import { timeRemaining, score, increment } from "$lib/stores";
	import { fade, crossfade, slide, fly } from "svelte/transition";

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
									{/if}
								{/if}
							</div>
						{/key}
					</div>
				{/if}
			</div>
		{/key}
	</div>
</div>

<style>
	.header-container {
		height: 80px;
	}
	.header-content {
		max-width: 800px;
		margin: auto;
		padding: 20px 10px;
		box-sizing: border-box;
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
	.timeremaining,
	.score {
		font-family: var(--mono-font-family);
		font-size: 18px;
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
