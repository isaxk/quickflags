<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from "svelte";

	export let value: string = "";
	export let invalid: boolean = false;
	
	let input:HTMLInputElement;

	const dispatch = createEventDispatcher();

	function handleType(e: KeyboardEvent) {
		dispatch("type", { e: e });
	}

	function handleBlur() {
		input.focus();
	}

	let scrollLock: boolean = false;
	let lockInterval: number;

	onMount(() => {
		lockInterval = window.setInterval(() => {
			window.scrollTo(0, 0);
		});
		input.focus();
	});

	onDestroy(() => {
		clearInterval(lockInterval);
	});
</script>

<input
	type="text"
	on:focus={() => (scrollLock = true)}
	on:blur={handleBlur}
	bind:value
	on:keydown={handleType}
	bind:this={input}
	autocorrect="off"
	class="block w-full px-3 bg-transparent border-neutral-600 h-full box-border border-2 rounded-md text-xl outline-none focus:border-teal-500 focus:outline-3 focus:outline-offset-0 focus: focus:outline-teal-950 transition"
	class:focus:border-red-500={invalid}
	class:focus:outline-red-950={invalid}
/>
