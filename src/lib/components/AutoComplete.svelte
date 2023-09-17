<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import { clean } from '$lib/text';
	export let value = '';
	export let countries = '';
	export let complete = (val) => {};
	let results = [];
	if (value.length > 0) {
		results = countries.filter((o) => clean(o.name).includes(value));
	}
</script>

{#if results.length > 0}
	<div class="auto-complete">
		{#key results}
			{#each results.splice(0, 5) as result, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="item" on:click={() => complete(result.name)}>
					<div class="left">
						<div class="key">
							{i + 1}
						</div>
					</div>
					<div class="right">{result.name}</div>
				</div>
			{/each}
		{/key}
	</div>
{/if}
<div class="spacer" />

<style>
	.auto-complete {
		position: absolute;
		left: 0px;
		bottom: 120px;
		background-color: #00000072;
		border-radius: 5px;
		min-width: 300px;
		padding: 5px;
	}
	.item {
		padding: 10px 10px;
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1rem;
		border-bottom: 1px solid var(--muted-border-color);
		transition: 0.3s;
	}
	.item:hover {
		background-color: #ffffff0c;
	}
	.key {
		background: linear-gradient(#3a3a3a, #595959);
		width: 30px;
		border-radius: 5px;
		outline: 0px solid black;
		border-bottom-width: 2px;
		border-right-width: 2px;
		text-align: center;
		box-sizing: content-box;
	}
	.spacer {
		height: 50px;
	}
</style>
