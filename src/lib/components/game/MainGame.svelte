<script type="ts">
	import { fly } from "svelte/transition";
</script>

<div
	class="custom-game-height flex flex-col"
	out:fly={{ y: -25, duration: 300 }}
>
	<slot />
</div>

<style lang="postcss">
	.custom-game-height {
		height: 500px;
		max-height: 100%;
	}
</style>
