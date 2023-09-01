<script>
	import countries from '$lib/countries';
	import throttle from "lodash/throttle";

	export let selectedCountry = null;
	let enteredCountry = '';
	let countryInvalid = null;

	const handleSubmit = throttle(() => {
		const searchResult = countries.find(
			(e) => e.name.toLowerCase() == enteredCountry.toLowerCase()
		);
		const shortHandSearchResult = countries.find(
			(e) => e.short.toLowerCase() == enteredCountry.toLowerCase()
		);
		if(enteredCountry == "") {
			selectedCountry = "Skipped!"
			return;
		}
		if (searchResult || shortHandSearchResult) {
			selectedCountry = enteredCountry;
			countryInvalid = null;
		} else {
			countryInvalid = true;
		}
		enteredCountry = "";
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
