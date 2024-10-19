<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="relative mb-2 flex aspect-flag w-full items-center justify-center"
	out:fly={{ duration: 200, y: -50 }}
>
	{@render children()}
</div>
