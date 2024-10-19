<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let { endTime }: { endTime: number } = $props();

	let secondsLeft = $state(60);
	let interval: number;

	const format = new Intl.NumberFormat('en-US', {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format;

	onMount(() => {
		interval = setInterval(() => {
			secondsLeft = (endTime - Date.now()) / 1000;
		}, 10);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="font-mono text-lg">
	{secondsLeft > 0 ? format(secondsLeft) : format(0)}
</div>
