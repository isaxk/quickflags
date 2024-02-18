<script lang="ts">
	import { scale, fade } from "svelte/transition";

<<<<<<< HEAD
	import { cubicInOut } from "svelte/easing";
	import IncorrectPause from "./IncorrectPause.svelte";

	export let currentCountry: { name: string; code: string; easy: number };
	export let incorrectPause: boolean;
	export let key: number;

	let inteval: any;
</script>

<div class="outer">
	{#key key}
		<div
			class="contain"
			in:scale={{ delay: 300, duration: 300, start: 0.992, opacity: 0 }}
			out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
		>
			{#if !incorrectPause}
				<img
					src="https://flagcdn.com/h240/{currentCountry.code.toLowerCase()}.webp"
					alt="FLAG"
				/>
			{/if}
		</div>
	{/key}
</div>

<div class="pause-container">
	{#key incorrectPause}
	<div class="pause" in:scale={{ delay: 0, duration: 400, start: 0.992, opacity: 0 }}
	out:scale={{ duration: 300, start: 1.02, opacity: 0 }}>
		{#if incorrectPause}
			<IncorrectPause />
			<div class="message" >Answer was {currentCountry.name}</div>
		{/if}
=======
	export let countryCode: string;
</script>


<div class="outer">
{#key countryCode}
	<div
		class="container"
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
	>
		<img
			src="https://flagcdn.com/h240/{countryCode.toLowerCase()}.webp"
			alt="FLAG"
		/>
>>>>>>> 3dbfb5f (mvp)
	</div>
{/key}
</div>

<<<<<<< HEAD

<style>
	.outer {
		height: 400px;
		width: 100%;
		position: relative;
	}
	.contain {
=======
<style>
    .outer {
        height: 400px;
        width: 100%;
        position: relative;
    }
	.container {
>>>>>>> 3dbfb5f (mvp)
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
<<<<<<< HEAD
		position: absolute;
		top: 0;
		left: 0;
	}
	img {
		height: 100%;
		max-height: 200px;
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
=======
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
>>>>>>> 3dbfb5f (mvp)
</style>
