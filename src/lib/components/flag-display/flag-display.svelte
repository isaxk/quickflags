<script lang="ts">
	import FlagDisplayContainer from './flag-display-container.svelte';
	import FlagDisplayBox from './flag-display-box.svelte';
	import FlagDisplayImage from './flag-display-image.svelte';
	import { flagUrlByCode } from '$lib/util/cache';
	import { fState } from '$lib/state/index.svelte';
	import FlagDisplayCorrectAnswer from './flag-display-correct-answer.svelte';
	import type { Country } from '$lib/types';

	let { currentCountry }: { currentCountry: Country } = $props();
</script>

<FlagDisplayContainer>
	{#key currentCountry}
		<FlagDisplayBox>
			<FlagDisplayImage src={flagUrlByCode(currentCountry.code)} />
			{#if fState.current === 'skip' || fState.current === 'incorrect'}
				<FlagDisplayCorrectAnswer answer={currentCountry} />
			{/if}
		</FlagDisplayBox>
	{/key}
</FlagDisplayContainer>
