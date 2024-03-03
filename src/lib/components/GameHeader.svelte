<script lang="ts">
	import { page } from "$app/stores";
	import { timeRemaining, score, increment } from "$lib/stores/game";
	import { fade, crossfade, slide, fly, scale } from "svelte/transition";
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
</script>

<div class="header-container">
	<nav class="header-content">
		<ul><li><a href="/" class="secondary">QuickFlags</a></li></ul>
		<ul>
			{#if $timeRemaining > 0}
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
	</nav>
</div>

<style>
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
	.positive {
		color: green;
	}
	.negative {
		color: red;
	}
</style>
