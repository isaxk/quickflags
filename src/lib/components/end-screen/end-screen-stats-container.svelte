<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex w-full justify-center">
	<div class="mb-10 flex h-36 w-full max-w-sm">{@render children()}</div>
</div>
