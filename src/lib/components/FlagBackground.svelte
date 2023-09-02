<script>
	import countries from '$lib/countries';
    import shuffle from "lodash/shuffle";
    import { slide, fade } from "svelte/transition";

    let shuffledCountries = shuffle(countries);

    setInterval(()=>{
        shuffledCountries = shuffle(countries);
    }, 3000)
</script>

{#key shuffledCountries}
<div class="flags" in:fade={{duration:500,delay:250}} out:fade={{duration:500}}>
	{#each shuffledCountries as country}
		<img src="/flags/{country.code.toLowerCase()}.svg" alt={country.name} />
	{/each}
</div>
{/key}

<style>
	img {
		width: 100%;
	}
    .flags {
        border-radius: 10px;
        position: absolute;
        width: 100%;
        height: 300px;
        overflow: hidden;
        z-index: 1;
        top: 0px;
        margin: 0px auto;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(60px, 1fr) ) ;
        align-items: center;
        gap: 1rem;
    }
</style>
