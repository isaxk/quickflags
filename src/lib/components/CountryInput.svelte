<script lang="ts">
	import type { Country } from "$lib/types";
	import { normalise } from "$lib/utils/text";
	import countries from "$lib/data/countries";

	import AutoComplete from "./AutoComplete.svelte";
	import { createEventDispatcher } from "svelte";

	export let value: string;

	const dispatch = createEventDispatcher();

	let innerWidth: number = 0;
	let innerHeight: number = 0;
	let results: Array<Country>;
	let currentValue: string = "";

	const handleSubmit = () => {
		var search = countries.filter((o) =>
			normalise(o.name).startsWith(normalise(currentValue)),
		);
		if (value.length > 0 && search.length == 0) {
			search = countries.filter((o) =>
				normalise(o.short).startsWith(normalise(currentValue)),
			);
		}
		value = search[0].name;
		dispatch("submit");
		currentValue = "";
	};

	$: {
		if (currentValue.length > 0) {
			results = countries.filter((o) =>
				normalise(o.name).startsWith(normalise(currentValue)),
			);
		} else {
			results = [];
		}
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<form class="container" on:submit|preventDefault={handleSubmit}>
	<div class="autocomplete">
		<AutoComplete {results} />
	</div>
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<fieldset role="group">
		{#if innerWidth > 500}
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="text"
				bind:value={currentValue}
				autocomplete="off"
				autofocus
			/>
		{:else}
			<input type="text" bind:value={currentValue} autocomplete="off" />
		{/if}
		{#if currentValue.length === 0}
			<button type="submit" class="outline secondary">Skip</button>
		{:else}
			<button type="submit">Next</button>
		{/if}
	</fieldset>
</form>

<style>
	form {
		max-width: 600px;
		margin: auto;
		position: relative;
	}
	.autocomplete {
		position: absolute;
		bottom: 95px;
		left: 0px;
	}
</style>
