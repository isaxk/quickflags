<script lang="ts">
	import type { Snippet } from 'svelte';

	import { fly, scale } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div
	out:fly={{ x: -50, duration: 250, opacity: 0 }}
	in:scale={{ duration: 250, start: 0.8, delay: 50 }}
	class="absolute flex aspect-flag w-full max-w-lg items-end justify-center rounded border bg-muted p-2 drop-shadow-md"
>
	{@render children()}
</div>
