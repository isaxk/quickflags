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

	const skip = throttle(()=>{
		selectedCountry="Pass";
	},1500)

	const handleSubmit = throttle(() => {
		if (enteredCountry == "") {
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
			maxItemsToShowInList=4
			inputClassName="country-input"
			autofocus
			placeholder="Enter Country..."
			items={plainCountries}
			bind:selectedItem={enteredCountry}
		/>
	{/key}
	<button class="next-button outline secondary" on:click={skip}>Skip</button>
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
	@media screen and (min-width: 570px) {
		.container {
			margin-bottom: 300px;
		}
	}
</style>
