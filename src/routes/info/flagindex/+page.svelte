<script>
	import countries from '$lib/countries';
	import FlagImage from '$lib/components/FlagImage.svelte';
</script>

<h2>Flag Index</h2>

<div class="flags">
	{#each countries as country}
		<div class="flag">
			<!-- svelte-ignore a11y-missing-attribute -->
            <h4>{country.name}</h4>
			<img src="https://flagcdn.com/w160/{country.code.toLowerCase()}.webp" />
		</div>
	{/each}
</div>

<style>
	.flags {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 2rem;
	}
</style>
