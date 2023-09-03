<script>
	import { slide } from 'svelte/transition';

	export let src;
</script>

<div class="flag-image-container">
	{#key src}
		<img in:slide={{ y: 40, duration: 350 }} out:slide={{ y: 40, duration: 300 }} class="flag-image" {src} alt={src} />
	{/key}
</div>

<style>
	.flag-image-container {
		width: 500px;
		max-width: 100%;
		margin: auto;
		height: 300px;
		display: grid;
		place-items: center;
		position: relative;
	}
	.flag-image {
		height: 200px;
	}
    @media screen and (max-width: 570px) {
        .flag-image, .flag-image-container {
            height: 120px;
        }
    }
</style>
