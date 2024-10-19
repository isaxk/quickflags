<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div in:fade={{ delay: 220, duration: 250 }}>{@render children()}</div>
