<script lang="ts">
	import countries from "$lib/data/countries";
	import { format } from "$lib/utils/format";
	import { createEventDispatcher, onMount } from "svelte";
	import Button from "../../Button.svelte";
	import AutoComplete from "./AutoComplete.svelte";
	import AutoCompleteResult from "./AutoCompleteResult.svelte";
	import AutoCompleteInput from "./AutoCompleteInput.svelte";
	import type { Country } from "$lib/types";

	const dispatch = createEventDispatcher();

	let enteredCountry: string = "";

	let results: Array<Country> = [];
	let input: HTMLInputElement;

	let active = 0;
	let invalid: boolean = false;
	let empty: boolean = false;

	let reFocus: number = 0;

	function handleSubmit() {
		if (enteredCountry === "") {
			dispatch("skip");
			enteredCountry = "";
		} else if (results.length > 0) {
			dispatch("submit", { value: results[active] });
			enteredCountry = "";
		} else {
			invalid = true;
		}
	}

	function handleType(e: CustomEvent) {
		invalid = false;
		if (enteredCountry.length > 0) {
			empty = false;
		} else {
			empty = true;
		}
		// Up Arrow
		if (e.detail.e.keyCode == 38) {
			e.preventDefault();
			if (active === results.length - 1) {
				active = 0;
			} else {
				active++;
			}
			return;
		}
		// Down Arrow
		if (e.detail.e.keyCode == 40) {
			if (active === 0) {
				active = results.length-1;
			}
			else {
				e.preventDefault();
				active += -1;
			}

			return;
		}
	}

	$: if (enteredCountry.length > 0) {
		results = countries.filter(
			(o) =>
				format.clean(o.name).startsWith(format.clean(enteredCountry)) ||
				format.clean(o.short).startsWith(format.clean(enteredCountry)),
		);
		results = results.slice(0, 5);
		active = 0;
	} else {
		results = [];
	}
</script>

<div class="h-20 flex justify-center items-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="h-full w-full flex items-center max-w-96 gap-1"
	>
		<!-- svelte-ignore a11y-autofocus -->
		<div class="h-full w-full relative">
			<AutoComplete>
				{#each results as result, i}
					<AutoCompleteResult
						active={active === i}
						on:click={() => {
							active = i;
							handleSubmit();
							reFocus++;
						}}
					>
						{result.name}
					</AutoCompleteResult>
				{/each}
			</AutoComplete>
			<AutoCompleteInput
				bind:value={enteredCountry}
				on:type={(e) => handleType(e)}
			/>
		</div>
		<Button
			style={enteredCountry.length > 0 ? "primary" : "secondary"}
			type="submit"
			>{#if enteredCountry.length > 0}Next{:else}Skip{/if}</Button
		>
	</form>
</div>
