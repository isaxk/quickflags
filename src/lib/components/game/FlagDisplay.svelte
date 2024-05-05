<script lang="ts">
  import PenaltyTimer from './PenaltyTimer.svelte';

	import type { Country } from "$lib/types";
	import { scale } from "svelte/transition";

	export let countryCode: string | null;
	export let currentCountry: Country;
</script>

<div class="relative h-52 sm:h-full w-full">
	{#key countryCode}
		<div
			in:scale={{ delay: 300, duration: 350, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 350, start: 1.02, opacity: 0 }}
			class="absolute top-0 left-0 w-full h-full flex items-center justify-center p-5 box-border"
		>
			{#if countryCode === null}
				<PenaltyTimer {currentCountry} duration={2500}/>
			{:else}
				<div
					style="background-image: url('https://flagcdn.com/w320/{countryCode.toLowerCase()}.webp');"
					class="w-full h-full sm:w-96 sm:h-60 bg-no-repeat bg-contain bg-center"
				></div>
			{/if}
		</div>
	{/key}
</div>
