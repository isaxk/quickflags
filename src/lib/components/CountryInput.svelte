<script>
	import AutoComplete from 'simple-svelte-autocomplete';

	import countries from '$lib/countries';
	import Message from '$lib/components/Message.svelte';
	import throttle from 'lodash/throttle';
	import { onMount } from 'svelte';
	import { clean } from '$lib/text';

	import Keyboard from 'svelte-keyboard';



	let innerWidth = 0;
	let innerHeight = 0;

	let boxvalue = '';

	const onKeydown = throttle((event) => {
		console.log(event.detail);
		if (event.detail === 'Backspace') {
			enteredCountry = enteredCountry.substring(0, enteredCountry.length - 1);
		} else if (event.detail === 'Enter') {
			handleSubmit(enteredCountry);
		} else if (event.detail === 'Space') {
			enteredCountry = enteredCountry + '';
		} else {
			enteredCountry += event.detail;
		}
	}, 100);

	export let selectedCountry = null;
	export let messageContent = "";
	let enteredCountry = '';
	let countryInvalid = null;
	let timeoutIndex = 15;
	let autocompletekey = 0;

	function handleTimeout() {
		timeoutIndex = timeoutIndex - 1;
		if (timeoutIndex <= 0) {
			timeoutIndex = 15;
			enteredCountry = "";
			selectedCountry = 'Pass';
		}
	}

	const skip = throttle(() => {
		selectedCountry = 'Pass';
	}, 1500);

	const handleSubmit = throttle(() => {
		if (enteredCountry == '') {
			selectedCountry = 'Pass!';
			return;
		}
		const searchResult = countries.find((e) => clean(e.name) == clean(enteredCountry));
		const shortHandSearchResult = countries.find((e) => clean(e.short) == clean(enteredCountry));
		if (searchResult || shortHandSearchResult) {
			selectedCountry = enteredCountry;
			enteredCountry = '';
			countryInvalid = null;
			autocompletekey++;
		} else {
			countryInvalid = true;
		}
		timeoutIndex = 15;
	}, 300);

	let plainCountries = countriesPlainList();

	function countriesPlainList() {
		var plain = [];
		for (var i = 0; i < countries.length; i++) {
			plain.push(countries[i].name);
		}
		return plain;
	}

	let timeoutFunc;

	onMount(() => {
		let timeoutFunc = window.setInterval(handleTimeout, 1000);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="keyboard-container">
	<Message {messageContent} />
	<form class="container" on:submit={handleSubmit(enteredCountry)}>
		<!-- svelte-ignore a11y-autofocus -->
		{#key autocompletekey}
			<!-- <AutoComplete
			maxItemsToShowInList=4
			inputClassName="country-input"
			autofocus
			placeholder="Enter Country..."
			items={plainCountries}
			bind:selectedItem={enteredCountry}
		/> -->
			{#if innerWidth < 600}
				<input readonly bind:value={enteredCountry} />
			{:else}
				<input autofocus bind:value={enteredCountry} />
			{/if}
		{/key}
		{#if enteredCountry.length>0}
		<button class="next-button primary" type="submit">Next</button>
		{:else}
		<button class="next-button outline secondary" type="submit">Skip</button>
		{/if}
	</form>
	{#if innerWidth < 600}
		<Keyboard
			--background="transparent"
			--border="1px solid var(--form-element-border-color)"
			--color="var(--h3-color) !important"
			--margin="0.125rem"
			layout="wordle"
			on:keydown={onKeydown}
		/>
	{/if}
</div>

<style>
	.container {
		padding: 40px 0px;
		width: 550px;
		max-width: 100%;
		margin: -20px auto;
		display: grid;
		grid-template-columns: 1fr max-content;
		grid-gap: 0.5rem;
	}
	.next-button {
		display: inline;
		width: max-content;
	}
	.keyboard-container {
		width: 100%;
		height: 40%;
		padding: 20px;
		min-height: 450px;
		position: fixed;
		bottom: 0px;
		left: 0px;
	}
</style>
