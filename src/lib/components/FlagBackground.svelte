<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { slide, fade, fly } from "svelte/transition";

	let shuffledCountries = 1;
	let interval:any;
	onMount(()=> {
		interval = setInterval(() => {
		shuffledCountries++;
		if (shuffledCountries == 4) {
			shuffledCountries = 1;
		}
	}, 4000);
	})
	onDestroy(()=>clearInterval(interval))
	
</script>

<div class="contain">
	{#key shuffledCountries}
		<div
			class="flags"
			in:fade={{ duration: 750, delay: 250 }}
			out:fade={{ duration: 750 }}
			style="background-image: url(/bg{shuffledCountries}.webp);"
		></div>
	{/key}
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.contain {
		height: 300px;
		position: relative;
		border-radius: 10px;
		margin-bottom: 30px;
		width: 100%;
		z-index: 0;
	}
	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background: #121212df;
		background: radial-gradient(#121212, #121212df);
		display: grid;
		place-items: center;
		backdrop-filter: blur(6px);
		border-radius: 10px;
	}
	.flags {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-position: left;
		background-size: 800px;
		border-radius: 10px;
		background-repeat: repeat;
	}
</style>
