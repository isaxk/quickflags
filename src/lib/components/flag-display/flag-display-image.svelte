<script lang="ts">
	import { fState } from '$lib/state/index.svelte';
	import { flagUrlByCode } from '$lib/util/cache';
	import { scale } from 'svelte/transition';

	let { src }: { src: string } = $props();
</script>

<div
	class="absolute {src == flagUrlByCode('mc')
		? 'flex items-center justify-center'
		: ''} {fState.current === 'incorrect' || fState.current === 'skip'
		? 'bottom-16 top-0 aspect-flag'
		: 'inset-0'} ease-cubicOut p-2 transition-all"
>
	<img
		{src}
		alt="Flag"
		class="h-full rounded border {src == flagUrlByCode('mc') || src == flagUrlByCode('ch')
			? 'mx-auto border object-scale-down'
			: 'aspect-flag w-full'} "
		out:scale={{ duration: 150, start: 0.9 }}
	/>
</div>
