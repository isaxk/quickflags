<script>
	import countries from '$lib/countries';
	import shuffle from 'lodash/shuffle';
	import { slide, fade, fly } from 'svelte/transition';

	let shuffledCountries = 1;

	setInterval(() => {
		shuffledCountries++;
		if (shuffledCountries == 4) {
			shuffledCountries = 1;
		}
	}, 5000);
</script>

{#key shuffledCountries}
	<div
		class="flags"
		in:fade={{ duration: 750, delay: 250 }}
		out:fade={{ duration: 750 }}
		style="background-image: url(/bg{shuffledCountries}.png);"
	/>
{/key}

<style>
	img {
		width: 200%;
	}
	.flags {
		border-radius: 10px;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
		top: 0px;
		margin: 0px auto;
		background-position: center;
		background-size: 750px;
	}
</style>
