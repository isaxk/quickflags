<script lang="ts">
	import { countries } from '$lib/data/countries';
	import { type Country } from '$lib/types/index';
	import AutoCompleteItem from './auto-complete-item.svelte';
	import AutoComplete from './auto-complete.svelte';
	import CountryBoxButton from './country-box-button.svelte';
	import CountryBoxContainer from './country-box-container.svelte';
	import CountryBoxForm from './country-box-form.svelte';
	import CountryBoxInput from './country-box-input.svelte';

	let value: string = $state('');
	let filteredItems: Country[] = $state([]);
	let selected: number = $state(0);
	let focusKey: number = $state(0);
	let focused = $state(false);

	let { onnext }: { onnext: (selected: Country) => void } = $props();

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			selected = selected < filteredItems.length - 1 ? selected + 1 : selected;
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			selected = selected > 0 ? selected - 1 : selected;
		}
		focused = true;
	}

	function handleKeyUp(e: KeyboardEvent) {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
			e.preventDefault();
			return;
		}
	}

	$effect(() => {
		if (value.length > 0) {
			filteredItems = countries
				.filter(
					(ctr) =>
						ctr.name.toLowerCase().startsWith(value.toLowerCase()) ||
						(ctr.short !== null ? ctr.short.toLowerCase().startsWith(value.toLowerCase()) : false)
				)
				.slice(0, 5);
			selected = 0;
		} else {
			filteredItems = [];
			selected = 0;
		}
	});

	function handleSubmit() {
		if (value.length < 2 || filteredItems[selected]) {
			onnext(filteredItems[selected]);
			value = '';
			selected = 0;
			focusKey++;
			filteredItems = [];
		}
	}

	function handleFocusChange(e: boolean) {
		focused = e;
	}
</script>

<CountryBoxContainer>
	{#if focused}
		<AutoComplete>
			{#each filteredItems as item, i (item.name)}
				<AutoCompleteItem
					selected={selected === i}
					onclick={() => {
						selected = i;
						handleSubmit();
					}}>{item.name}</AutoCompleteItem
				>
			{/each}
		</AutoComplete>
	{/if}
	<CountryBoxForm onsubmit={handleSubmit}>
		<CountryBoxInput
			bind:value
			{focusKey}
			onkeydown={handleKeyDown}
			onkeyup={handleKeyUp}
			onfocuschange={handleFocusChange}
		/>
		<CountryBoxButton />
	</CountryBoxForm>
</CountryBoxContainer>
