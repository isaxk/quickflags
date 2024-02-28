<script lang="ts">
	import { tweened } from "svelte/motion";

	let timerWidth = tweened(100, {
		duration: 1500,
	});

	$: if ($timerWidth <= 0)
		window.setTimeout(() => {
			timerWidth = tweened(100, {
				duration: 1500,
			});
		}, 50);

	timerWidth.set(0);
</script>

	<div class="timer" style="width: {$timerWidth}%;"></div>

<style>
	.timer {
		background-color: rgba(255, 255, 255, 0.596);
		height: 100%;
		border-radius: 5px;
	}
</style>
