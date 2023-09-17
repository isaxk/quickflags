<script>
	import AutoComplete from '$lib/components/AutoComplete.svelte';

	import countries from '$lib/countries';
	import Message from '$lib/components/Message.svelte';
	import throttle from 'lodash/throttle';
	import { onMount } from 'svelte';
	import { clean } from '$lib/text';

	function isNumeric(str) {
		if (typeof str != 'string') return false; // we only process strings!
		return (
			!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
			!isNaN(parseFloat(str))
		); // ...and ensure strings of whitespace fail
	}

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
	export let messageContent = '';
	let enteredCountry = '';
	let countryInvalid = null;
	let autocompletekey = 0;


	const skip = throttle(() => {
		selectedCountry = 'Pass';
	}, 1500);

	const handleSubmit = throttle((val) => {
		if (val === '') {
			selectedCountry = 'Pass';
			return;
		}
		const searchResult = countries.find((e) => clean(e.name) == clean(val));
		const shortHandSearchResult = countries.find((e) => clean(e.short) == clean(val));
		if (searchResult || shortHandSearchResult) {
			selectedCountry = enteredCountry;
			enteredCountry = '';
			countryInvalid = null;
			autocompletekey++;
		} else {
			countryInvalid = true;
		}
	}, 300);

	let plainCountries = countriesPlainList();

	const checkForNumber = (event) => {
		if (isNumeric(event.key)) {
			var results = countries.filter((o) => clean(o.name).includes(clean(enteredCountry)));
			enteredCountry = results[event.key - 1].name;
			event.preventDefault();
		}
	};

	function countriesPlainList() {
		var plain = [];
		for (var i = 0; i < countries.length; i++) {
			plain.push(countries[i].name);
		}
		return plain;
	}

</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="keyboard-container">
	<div class="keyboard-inner">
		<Message {messageContent} />
		<form class="container" on:submit={handleSubmit(enteredCountry)}>
			{#key enteredCountry}
				<AutoComplete
					{countries}
					value={clean(enteredCountry)}
					complete={(v) => {
						enteredCountry = v;
						handleSubmit(v);
					}}
				/>
			{/key}
			<!-- svelte-ignore a11y-autofocus -->

			<!-- <AutoComplete
			maxItemsToShowInList=4
			inputClassName="country-input"
			autofocus
			placeholder="Enter Country..."
			items={plainCountries}
			bind:selectedItem={enteredCountry}
		/> -->
			<div class="grid">
				{#key autocompletekey}
					{#if innerWidth < 600}
						<input readonly bind:value={enteredCountry} />
					{:else}
						<input autofocus on:keydown={checkForNumber} bind:value={enteredCountry} />
					{/if}
				{/key}
				{#if enteredCountry.length > 0}
					<button class="next-button primary" type="submit">Next</button>
				{:else}
					<button class="next-button outline secondary" type="submit">Skip</button>
				{/if}
			</div>
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
</div>

<style>
	.container {
		padding: 20px 0px;
		width: 550px;
		max-width: 100%;
		margin: -20px auto;
		position: relative;
	}
	.container .grid {
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
	.keyboard-inner {
		position: relative;
		width: 550px;
		max-width: 100%;
		margin: 0px auto;
		height: 100%;
	}
</style>
