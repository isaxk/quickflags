<script>
	import AutoComplete from 'simple-svelte-autocomplete';

	import countries from '$lib/countries';
	import throttle from 'lodash/throttle';
	import { onMount } from 'svelte';
	import { clean } from '$lib/text';

	export let selectedCountry = null;
	let enteredCountry = '';
	let countryInvalid = null;
	let timeoutIndex = 10;
	let autocompletekey = 0;

	function handleTimeout() {
		timeoutIndex = timeoutIndex - 1;
		if (timeoutIndex <= 0) {
			timeoutIndex = 10;
			selectedCountry = 'Pass';
		}
	}

	const handleSubmit = throttle(() => {
		if (!enteredCountry) {
			selectedCountry = 'Pass';
			enteredCountry = '';
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
		timeoutIndex = 10;
	}, 700);

	function handleInputChange() {
		if (enteredCountry == '') {
			countryInvalid = null;
		}
	}

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

	$: handleSubmit(enteredCountry);
</script>

<form class="container">
	<!-- svelte-ignore a11y-autofocus -->
	{#key autocompletekey}
		<AutoComplete
			maxItemsToShowInList=5
			inputClassName="country-input"
			autofocus
			placeholder="Enter Country..."
			items={plainCountries}
			bind:selectedItem={enteredCountry}
		/>
	{/key}
	<button class="next-button" on:click={handleSubmit}>Next</button>
</form>

<style>
	.container {
		padding: 40px 0px;
		width: 550px;
		max-width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr max-content;
		grid-gap: 0.5rem;
	}
	.next-button {
		display: inline;
		width: max-content;
	}
	/* @media screen and (max-width: 570px) {
		.container {
			position: fixed;
			bottom: 0px;
			left: 0px;
			margin: 0px auto;
			padding: 0px 20px;
		}
	} */
</style>
