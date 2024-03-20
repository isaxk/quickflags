<script lang="ts">
	import { timeRemaining, score, increment } from "$lib/stores/game";
	import { timeFormat, scoreFormat, incrementFormat } from "$lib/utils/format";
	import { fade, fly } from "svelte/transition";
</script>

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
