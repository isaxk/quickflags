<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, onsubmit }: { children: Snippet; onsubmit: () => void } = $props();
</script>

<form
	class="flex h-12"
	onsubmit={(e) => {
		e.preventDefault();
		onsubmit();
	}}
>
	{@render children()}
</form>
