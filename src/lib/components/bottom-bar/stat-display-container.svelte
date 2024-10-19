<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="bg-muted flex h-full w-max items-center justify-end gap-6 rounded border px-4 drop-shadow-md transition-all"
>
	{@render children()}
</div>
