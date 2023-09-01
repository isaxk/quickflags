<script>
	import countries from '$lib/countries';
	import throttle from "lodash/throttle";
	import { clean } from "$lib/text";

	export let selectedCountry = null;
	let enteredCountry = '';
	let countryInvalid = null;

	const handleSubmit = throttle(() => {
		const searchResult = countries.find(
			(e) => clean(e.name) == clean(enteredCountry)
		);
		const shortHandSearchResult = countries.find(
			(e) => clean(e.short) == clean(enteredCountry)
		);
		if(enteredCountry == "") {
			selectedCountry = "Pass";
			enteredCountry = "";
			return;
		}
		if (searchResult || shortHandSearchResult) {
			selectedCountry = enteredCountry;
			enteredCountry = "";
			countryInvalid = null;
		} else {
			countryInvalid = true;
		}
	}, 700)

    function handleInputChange() {
        if(enteredCountry == "") {
            countryInvalid = null;
        }
    }
</script>

<form class="container" on:submit={handleSubmit}>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		autofocus
		type="text"
		aria-invalid={countryInvalid}
		class="country-input"
		bind:value={enteredCountry}
        on:keyup={handleInputChange}
		placeholder="Choose a country..."
	/>
	{#if enteredCountry.length < 1}
		<button class="next-button outline">Skip</button>
	{:else}
		<button class="next-button" type="submit">Next</button>
	{/if}
</form>

<style>
	.container {
		padding: 40px 0px;
		width: 550px;
		max-width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr max-content;
		gap: 0.5rem;
	}
	.next-button {
		display: inline;
		width: max-content;
	}
</style>
