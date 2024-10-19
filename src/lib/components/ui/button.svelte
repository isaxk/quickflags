<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	let {
		onclick = () => {},
		children,
		variant = 'primary',
		class: className = ''
	}: {
		onclick: () => void;
		children: Snippet;
		class: string;
		variant: 'primary' | 'secondary';
	} = $props();

	let variantCss =
		variant === 'primary'
			? 'bg-blue-500 hover:bg-blue-500/90 border-blue-500 border'
			: 'bg-muted border hover:bg-muted/80 text-black dark:text-white';
</script>

<button
	class={twMerge(
		'rounded bg-blue-500 px-5 py-3 text-white drop-shadow-md transition-all hover:bg-blue-600',
		variantCss,
		className
	)}
	{onclick}
>
	{@render children()}
</button>
