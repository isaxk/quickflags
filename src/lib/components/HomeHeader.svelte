<script lang="ts">
	import { page } from "$app/stores";
	import { timeRemaining, score, increment } from "$lib/stores/game";
	import { fade, crossfade, slide, fly, scale } from "svelte/transition";
	import Countup from "svelte-countup";
	import { browser } from "$app/environment";

	const timeFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const scoreFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 5,
		maximumFractionDigits: 0,
	});
	const incrementFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 4,
		maximumFractionDigits: 0,
	});

	let previousScore = 0;

	$: if (browser) {
		window.setTimeout(() => (previousScore = $score), 1000);
	}
</script>

<div
	class="header-container"
>
	<nav class="header-content">
		<ul>
			<li><a href="/" class="contrast">QuickFlags</a></li>
		</ul>
		<ul>
			<li>
				<a href="https://github.com/isaxk/quickflags" class="secondary"
					>GitHub</a
				>
			</li>
			<li><a href="https://www.isaxk.com" class="secondary">isaxk.com</a></li>
		</ul>
	</nav>
</div>
