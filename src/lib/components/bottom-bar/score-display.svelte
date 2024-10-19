<script lang="ts">
	let { score }: { score: number } = $props();

	const format = new Intl.NumberFormat('en-US', {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format;
</script>

<div class="font-mono text-lg">
	{format(score)}
</div>
