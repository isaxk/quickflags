<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div
	out:fly={{ duration: 200, y: -20, delay: 50 }}
	class="flex h-12 -translate-y-[123px] pt-2 transition-all sm:-translate-y-0 sm:border-0"
>
	{@render children()}
</div>
