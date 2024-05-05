<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { cubicInOut, cubicOut, elasticInOut, linear, sineInOut } from "svelte/easing";
	import { slide } from "svelte/transition";

	export let active: boolean;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("click");
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	role="button"
	tabindex="0"
	class="transition p-3 rounded-md text-xl bg-opacity-40 hover:bg-slate-800 hover:bg-opacity-80 {active ? 'bg-teal-800' : ''}"
	on:click={handleClick}
	transition:slide={{duration:250, easing: sineInOut}}
>
	<slot />
</div>
