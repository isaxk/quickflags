<script lang="ts">
	import { scale, fade } from "svelte/transition";

	import { cubicInOut } from "svelte/easing";
	import IncorrectPause from "./IncorrectPause.svelte";

	import { currentCountry, incorrectPause } from "$lib/stores/game";

	let inteval: any;
</script>

<div class="outer">
	{#key $currentCountry}
		<div
			class="contain"
			in:scale={{ delay: 300, duration: 300, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
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
		height: 500px;
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

	.message {
		padding: 10px 0px 20px 0px;
		text-align: center;
	}

	@media screen and (max-width: 500px) {
		.outer {
			height: 220px;
			margin-bottom: 25px;
			margin-top: -25px;
		}
	}
	.pause {
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		
		
		
	}
	.pause-container {
		position: relative;
		height: 20px;
		max-width: 600px;
		margin: auto;
		margin-bottom: 50px;
		margin-top: -50px;
	}
</style>
