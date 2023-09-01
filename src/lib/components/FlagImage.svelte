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
		width: 100%;
		height: 300px;
		display: grid;
		place-items: center;
	}
	.flag-image {
		height: 300px;
	}
    @media screen and (max-width: 570px) {
        .flag-image, .flag-image-container {
            height: 150px;
        }
    }
</style>
