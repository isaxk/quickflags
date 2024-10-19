<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { children, i }: { children: Snippet; i: number } = $props();
</script>

<div class="py-0.5 text-xl" in:fly={{ duration: 200, y: 10, delay: 750 + i * 175 }}>
	{@render children()}
</div>
