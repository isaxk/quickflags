<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import type { PreviousGame } from '$lib/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let stats: { label: string; val: string | number }[] = [];

	function recentAverageScore() {
		if (localStorage.getItem('game-history')) {
			let history: PreviousGame[] = JSON.parse(localStorage.getItem('game-history')!);
			let recent: PreviousGame[] = history.slice(-7);

			let total = 0;
			let toDivide = recent.length;
			recent.forEach((e) => {
				total += e.score;
				if (e.questions.length === 0) {
					toDivide += -1;
				}
			});
			return total / toDivide;
		} else {
			return 0;
		}
	}

	function recentAccuracy() {
		if (localStorage.getItem('game-history')) {
			let history: PreviousGame[] = JSON.parse(localStorage.getItem('game-history')!);
			let recent: PreviousGame[] = history.slice(-7);

			let total = 0;
			let toDivide = recent.length;
			recent.forEach((e) => {
				if (e.questions.length === 0) {
					toDivide += -1;
				} else {
					total += e.accuracy;
				}
			});
			return total / toDivide;
		} else {
			return 0;
		}
	}
	function gamesFinished() {
		if (localStorage.getItem('game-history')) {
			return JSON.parse(localStorage.getItem('game-history')!).length;
		} else {
			return 0;
		}
	}

	onMount(() => {
		if (localStorage.getItem('highscore') && localStorage.highscore > 1000) {
			localStorage.setItem('highscore', '0');
		}
		stats = [
			{
				label: 'Highscore',
				val: localStorage.getItem('highscore') ?? 0
			},
			{
				label: 'Total Games Finished',
				val: gamesFinished()
			},
			{
				label: 'Recent Average Score',
				val: recentAverageScore().toFixed(1)
			},
			{
				label: 'Recent Average Accuracy',
				val: recentAccuracy().toFixed(0) + '%'
			}
		];
	});
</script>

{#if stats.length > 0}
	<div class="flex-grow" in:fly={{ y: -20, duration: 150 }}>
		<Table.Root class="text-left">
			<Table.Body>
				{#each stats as stat}
					<Table.Row>
						<Table.Cell class="font-medium">{stat.label}</Table.Cell>
						<Table.Cell class="text-md text-right font-mono">{stat.val}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
{/if}
