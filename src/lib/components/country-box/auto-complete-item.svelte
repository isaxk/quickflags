<script lang="ts">
	import type { Snippet } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let {
		selected,
		children,
		onclick = () => {}
	}: { selected: boolean; children: Snippet; onclick: () => void } = $props();
</script>

<button
	class="px-2 py-2 text-left transition-all {selected ? 'bg-blue-500/45' : 'hover:bg-black/5'}"
	transition:slide={{ duration: 200, easing: expoOut }}
	{onclick}
>
	{@render children()}
</button>
