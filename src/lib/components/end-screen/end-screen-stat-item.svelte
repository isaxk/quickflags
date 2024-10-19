<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		i = 0,
		label,
		value,
		beat = false
	}: { i: number; label: string; value: string | number; beat?: boolean } = $props();
</script>

<div
	class="flex h-full w-1/3 flex-col items-center justify-start border-r pt-10 text-center last:border-r-0"
	in:fly={{ y: -20, duration: 200, delay: 1300 + i * 200 }}
>
	<div class="text-md font-medium">{label}</div>
	<div class="font-mono text-2xl font-medium">{value}</div>
	{#if beat}
		<div class="mt-1 rounded bg-green-500/80 px-5 py-1 text-white dark:bg-green-500/50">BEAT</div>
	{/if}
</div>
