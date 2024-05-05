<script lang="ts">
	import type { Country } from "$lib/types";
	import { onMount } from "svelte";

	export let currentCountry: Country;
	export let duration: number;

	let sliderWidth: number = 100;

	onMount(() => {
		window.setInterval(() => {
			sliderWidth = sliderWidth - .2;

		}, duration / 500);
	});
</script>

<div class="w-full h-full text-center flex items-end justify-center">
    <div class="w-96 max-w-full">
        <div class="w-full relative h-2 mb-2">
            <div
                class="absolute left-0 top-0 h-full bg-gray-500 rounded"
                style:width="{sliderWidth}%"
            ></div>
        </div>
        <h3 class="text-xl mb-10">Answer was {currentCountry.name}</h3>
    </div>
	
</div>
