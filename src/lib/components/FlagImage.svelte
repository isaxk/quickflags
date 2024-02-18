<script lang="ts">
	import { scale, fade } from "svelte/transition";

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
	</div>
{/key}
</div>

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
</style>
