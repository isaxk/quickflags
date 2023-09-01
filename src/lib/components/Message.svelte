<script>
	import { fly } from 'svelte/transition';

	export let messageContent;
</script>

<div class="message">
	{#key messageContent}
		<div in:fly={{ y: 40, duration: 350, delay: 300 }} out:fly={{ y: -40, duration: 300 }}>
			{messageContent}
		</div>
	{/key}
</div>

<style>
	.message {
		height: 20px;
		display: grid;
		place-items: center;
		padding-top: 10px;
	}
</style>
