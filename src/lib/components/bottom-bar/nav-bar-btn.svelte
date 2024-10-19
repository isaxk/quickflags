<script lang="ts">
	import type { Icon as IconType } from 'lucide-svelte';

	let {
		label,
		Icon,
		onclick = () => {}
	}: { label: string; Icon: typeof IconType; onclick: () => void } = $props();
</script>

<button
	class="bg-muted text-muted-foreground hover:bg-muted/80 flex items-center gap-1 rounded border px-3 py-2 drop-shadow-md transition-all"
	{onclick}
>
	<Icon size={14} />
	{label}
</button>
