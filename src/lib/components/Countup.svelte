<script lang="ts">
	import { nanoid } from "nanoid";
	import { inview } from "svelte-inview";

	const id = nanoid();

	let isInView: boolean;

	export let value;
	export let initial = 0;
	export let duration = 3000;
	export let step = 1;
	export let roundto = 1;
	export let format = true;
	export let formatFn: Function = (v: number) => {
		return v;
	};

	export let finished = false;

	function formatNumber(input: number) {
		if (format) {
			var round = Math.round(input);
			return formatFn(round);
		}
		return input;
	}

	const counterResult: Array<number> = [];
	const timers: Array<number> = [];

	const max = parseInt(value);
	while (duration / ((max - initial) / step) < 2) {
		step++;
	}

	counterResult[id] = initial;
	timers[id] = setInterval(
		() => {
			if (isInView) {
				if (counterResult[id] <= max) {
					counterResult[id] += step;
				} else {
					clearInterval(timers[id]);
					counterResult[id] = Math.round(max / roundto) * roundto;
					finished = true;
				}
			}
		},
		duration / ((max - initial) / step),
	);
</script>

<span
	use:inview
	on:change={(e) => {
		const { inView } = e.detail;
		isInView = inView;
	}}>{formatNumber(counterResult[id])}</span
>
