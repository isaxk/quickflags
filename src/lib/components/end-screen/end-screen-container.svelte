<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div in:fly={{ delay: 250, y: 50, duration: 200 }} class="pt-10 text-center">
	{@render children()}
</div>
