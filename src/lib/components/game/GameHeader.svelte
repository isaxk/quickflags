<script lang="ts">
	import { format } from "$lib/utils/format";
	import { fly, slide } from "svelte/transition";
	import BackLink from "../BackLink.svelte";

	export let score: number;
	export let timeRemaining: number;
	export let increment: number | null;
</script>

<h1 class="text-xl font-medium w-full"><BackLink>QuickFlags</BackLink></h1>
<div class="flex gap-4 text-lg">
	<div class="font-mono relative">
		{format.score(score)}
		{#if increment !== null}
			<div
				class="absolute top-5 right-0 text-right text-green-600"
				in:fly={{ y: 50 }}
				out:fly={{ y: -10 }}
			>
				+{format.increment(increment)}
			</div>
		{/if}
	</div>
	<div class="font-mono">{format.time(timeRemaining)}</div>
</div>
