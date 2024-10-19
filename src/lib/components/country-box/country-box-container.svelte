<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex justify-center pt-12 sm:pt-0" out:fly={{ duration: 200, y: -30, delay: 45 }}>
	<div class="relative w-full max-w-lg">{@render children()}</div>
</div>
