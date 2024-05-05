<script lang="ts">
	import { scale } from "svelte/transition";

	export let data;
</script>

{#key data.url}
	<div
		in:scale={{ delay: 350, duration: 350, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 350, start: 1.02, opacity: 0 }}
		class="h-full"
	>
		<slot />
	</div>
{/key}
