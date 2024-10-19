<script lang="ts">
	import { fState } from '$lib/state/index.svelte';
	import { onMount } from 'svelte';

	let {
		value = $bindable(),
		onkeydown,
		onkeyup,
		onfocuschange,
		focusKey
	}: {
		value: string;
		onkeydown: (e: KeyboardEvent) => void;
		onkeyup: (e: KeyboardEvent) => void;
		onfocuschange: (e: boolean) => void;
		focusKey: number;
	} = $props();

	let input: HTMLInputElement;

	onMount(() => {
		input.focus();
	});

	let states = {
		skip: 'focus:border-amber-500',
		correct: 'focus:border-green-500',
		incorrect: 'focus:border-red-500',
		idle: 'focus:border-blue-500'
	};

	$effect(() => {
		console.log(focusKey);
		input.focus();
	});
</script>

<input
	type="text"
	bind:value
	onfocus={() => onfocuschange(true)}
	onblur={() => {
		setTimeout(() => {
			onfocuschange(false);
		}, 0);
	}}
	bind:this={input}
	{onkeydown}
	{onkeyup}
	spellcheck="false"
	autocorrect="off"
	class="w-full rounded-l rounded-r-none border bg-muted p-2 text-xl outline-none drop-shadow-md transition-all duration-200 focus:border-2
	{states[fState.current]}"
/>
