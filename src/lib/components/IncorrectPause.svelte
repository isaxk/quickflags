<script lang="ts">
	import { tweened } from "svelte/motion";
	import { scale } from "svelte/transition";
	import { currentCountry, incorrectPause } from "$lib/stores/game";

	let timerWidth = tweened(100, {
		duration: 1500,
	});

	timerWidth.set(0);
</script>

<div class="pause-container">
	{#key $incorrectPause}
		<div
			class="pause"
			in:scale={{ delay: 0, duration: 400, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		>
			{#if $incorrectPause}
				<div class="timer" style="width: {$timerWidth}%;"></div>
				<div class="message">Answer was {$currentCountry.name}</div>
			{/if}
		</div>
	{/key}
</div>

<style>
	.timer {
		background-color: rgba(255, 255, 255, 0.596);
		height: 8px;
		border-radius: 5px;
	}
</style>
