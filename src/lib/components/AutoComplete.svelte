<script lang="ts">
	export let results: any;
	let fixedResults: {
		code: string;
		name: string;
		short: string;
		easy: number;
	}[] = [];
	$: fixedResults = results.slice(0, 5).reverse();
</script>

{#if results.length > 0}
	<div class="auto-complete">
		{#key fixedResults}
			{#each fixedResults as result, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				{#if i >= fixedResults.length - 1}
					<div class="item highlighted">
						{result.name}
					</div>
				{:else}
					<div class="item">
						{result.name}
					</div>
				{/if}
			{/each}
		{/key}
	</div>
{/if}

<style>
	.auto-complete {
		background-color: #12121269;
		min-width: 300px;
		border-radius: 5px;
	}
	.item {
		padding: 10px;
		border-radius: 5px;
	}
	.highlighted {
		background-color: rgba(52, 52, 52, 0.577);
	}
</style>
