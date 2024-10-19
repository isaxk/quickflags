<script lang="ts">
	import type { Snippet } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div
	transition:fly={{ duration: 200, y: 20, easing: expoOut }}
	class="bg-muted/95 absolute bottom-14 left-0 z-20 flex w-52 flex-col-reverse overflow-y-hidden rounded drop-shadow-lg backdrop-blur"
>
	{@render children()}
</div>
