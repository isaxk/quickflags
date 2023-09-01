<script>
	import { fly } from 'svelte/transition';

	export let messageContent;
</script>

<div class="message">
	{#key messageContent}
		<p in:fly={{ y: 40, duration: 350 }} out:fly={{ y: -40, duration: 300 }}>
			{messageContent}
		</p>
	{/key}
</div>

<style>
	.message {
		height: 20px;
		display: grid;
		place-items: center;
	}
</style>
