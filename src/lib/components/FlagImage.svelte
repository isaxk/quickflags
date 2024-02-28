<script lang="ts">
	import { scale, fade } from "svelte/transition";

	import { cubicInOut } from "svelte/easing";
	import IncorrectPause from "./IncorrectPause.svelte";

	export let countryCode: string;
	export let incorrectPause: boolean;
	export let key: number;

	let inteval: any;
</script>

<div class="outer">
	{#key key}
		<div
			class="container"
			in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		>
			{#if !incorrectPause}
				<img
					src="https://flagcdn.com/h240/{countryCode.toLowerCase()}.webp"
					alt="FLAG"
				/>
			{/if}
		</div>
	{/key}
</div>
{#key incorrectPause}
<div class="pause">
	{#if incorrectPause}
		<IncorrectPause />
	{/if}
</div>
{/key}

<style>
	.outer {
		height: 400px;
		width: 100%;
		position: relative;
	}
	.container {
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
		max-height: 200px;
		max-width: 100%;
	}

	@media screen and (max-width: 500px) {
		.outer {
			height: 180px;
			margin-bottom: 25px;
			margin-top: -25px;
		}
	}
	.pause {
		height: 8px;
		max-width: 600px;
		margin: auto;
		margin-bottom: 50px;
		margin-top: -50px;
	}
</style>
