<script lang="ts">
	import { scale } from "svelte/transition";
	import { currentCountry, incorrectPause } from "$lib/stores/game";
	import { standardScale } from "$lib/utils/transition";
</script>

<div class="outer">
	{#key $currentCountry}
		<div
			class="contain"
			in:scale={standardScale.in} out:scale={standardScale.out}
		>
			{#if !$incorrectPause}
				<img
					src="https://flagcdn.com/h240/{$currentCountry.code.toLowerCase()}.webp"
					alt="FLAG"
				/>
			{/if}
		</div>
	{/key}
</div>




<style>
	.outer {
		height: 400px;
		width: 100%;
		position: relative;
	}
	.contain {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	img {
		height: 100%;
		max-height: 240px;
		max-width: 100%;
	}



	@media screen and (max-width: 500px) {
		.outer {
			height: 220px;
			margin-bottom: 25px;
			margin-top: -25px;
		}
	}

</style>
