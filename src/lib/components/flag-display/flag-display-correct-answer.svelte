<script lang="ts">
	import type { Country } from '$lib/types';

	export let answer: Country;
</script>

<div class="text-center">
	<div class="text-sm">Correct answer was <span class="font-semibold">{answer.name}</span>.</div>
	<div class="text-md font-bold sm:text-lg">Type the correct answer below to continue.</div>
</div>
