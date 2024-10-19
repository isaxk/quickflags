<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="mx-auto flex w-full max-w-lg flex-col gap-3 p-2 pt-4 sm:pt-14"
	in:fade={{ duration: 200 }}
>
	{@render children()}
</div>
