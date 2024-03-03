<script lang="ts">
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import Svelecte from "svelecte";
	import AutoComplete from "./AutoComplete.svelte";
	import countries from "$lib/data/countries";
	import { normalise } from "$lib/utils/text";

	export let value: string;
	
	let innerWidth = 0;
	let innerHeight = 0;
	let results: { code: string; name: string; short: string; easy: number }[] =
		[];
	let currentValue: string = "";

	const dispatch = createEventDispatcher();

	const  handleSubmit = () => {
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
	}

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
	<fieldset role="group">
		{#if innerWidth > 500}
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
