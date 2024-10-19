<script lang="ts">
	import { fState } from '$lib/state/index.svelte';
	import { Check, X, SkipForward } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let states = {
		skip: {
			css: 'bg-amber-500',
			icon: SkipForward
		},
		correct: {
			css: 'bg-green-500',
			icon: Check
		},
		incorrect: {
			css: 'bg-red-500',
			icon: X
		},
		idle: {
			css: 'bg-blue-500',
			icon: null
		},
		restart: {
			css: '',
			icon: null
		}
	};
</script>

<button
	type="submit"
	class="flex h-full w-24 items-center justify-center rounded-r text-center text-white transition-all duration-200 {states[
		fState.current
	].css}"
>
	{#if fState.current !== 'idle'}
		<svelte:component this={states[fState.current].icon} />
	{:else}
		Next
	{/if}
</button>
