<script lang="ts">
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

<<<<<<< HEAD
	import Svelecte from "svelecte";
	import AutoComplete from "./AutoComplete.svelte";
	import countries from "$lib/countries";
	import { normalise } from "$lib/text";

	export let value: string;

	let results: { code: string; name: string; short: string; easy: number }[] =
		[];

	let currentValue: string = "";

	function handleSubmit() {
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



	let innerWidth = 0;
	let innerHeight = 0;

	$: {
		if (currentValue.length > 0) {
			results = countries.filter((o) =>
				normalise(o.name).startsWith(normalise(currentValue)),
			);
		} else {
			results = [];
		}
	}
=======

    export let value:string;

	let currentValue: string = "";

	const handleSubmit = () => {
        value = currentValue;
        dispatch("submit");
        currentValue = "";
    };

	onMount(() => {
		window.setInterval(() => {
			window.scrollTo(0, 0);
		}, 100);
	});

	let innerWidth = 0;
	let innerHeight = 0;
>>>>>>> 3dbfb5f (mvp)
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<form class="container" on:submit|preventDefault={handleSubmit}>
<<<<<<< HEAD
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
=======
	<!-- svelte-ignore a11y-autofocus -->
	{#if innerWidth > 500}
		<input type="text" bind:value={currentValue} autofocus autocomplete="off" />
	{:else}
		<input type="text" bind:value={currentValue} autocomplete="off" />
	{/if}

	<button type="submit">Next</button>
</form>

<style>
	.container {
		width: 600px;
		max-width: 100%;
		margin: auto;
		height: 30px;
		display: grid;
		place-items: center;
		display: grid;
		grid-template-columns: 1fr max-content;
		gap: 10px;
	}

	button {
		height: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
		border-radius: 8px;
		border: 1px solid var(--primary-accent-color);
		background-color: transparent;
		color: white;
		font-size: 16px;
	}

	input {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		font-size: 18px;
		color: var(--text-color);
		font-family: var(--display-font-family);
		border-radius: 8px;
		background-color: transparent;
		border: 2px solid var(--secondary-accent-color);
		border-radius: 10px;
	}
	input:focus {
		outline: 1px solid var(--text-color);
>>>>>>> 3dbfb5f (mvp)
	}
</style>
