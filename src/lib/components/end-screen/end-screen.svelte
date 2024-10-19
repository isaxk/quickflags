<script lang="ts">
	import EndScreenContainer from './end-screen-container.svelte';
	import EndScreenHeader from './end-screen-header.svelte';
	import EndScreenContent from './end-screen-content.svelte';
	import EndScreenStatsContainer from './end-screen-stats-container.svelte';
	import EndScreenStatItem from './end-screen-stat-item.svelte';
	import Button from '../ui/button.svelte';

	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	import type { CountryHistoryItem, PreviousGame } from '$lib/types';
	import { fState } from '$lib/state/index.svelte';
	import { onMount } from 'svelte';

	let { score, history }: { score: number; history: CountryHistoryItem[] } = $props();

	function correctItems() {
		let count = 0;
		history.forEach((e) => {
			count += e.correct ? 1 : 0;
		});
		return count;
	}

	const accuracy = (correctItems() / history.length) * 100;
	let oldHighscore: number = $state(0);

	onMount(() => {
		oldHighscore = localStorage.getItem('highscore')
			? parseInt(localStorage.getItem('highscore')!)
			: 0;
		let previousGames: PreviousGame[] = localStorage.getItem('game-history')
			? JSON.parse(localStorage.getItem('game-history')!)
			: [];
		localStorage.setItem(
			'game-history',
			JSON.stringify([
				...previousGames,
				{
					questions: history,
					score,
					accuracy
				}
			])
		);
		console.log(oldHighscore, score);
		if (score > oldHighscore) {
			localStorage.setItem('highscore', score.toString());
		}
		localStorage.setItem('gamesCompleted', (localStorage.getItem('gamesCompleted')! ?? 0) + 1);
	});
</script>

<EndScreenContainer>
	<EndScreenHeader message="Time's up!" />
	<EndScreenContent>
		<EndScreenStatsContainer>
			<EndScreenStatItem i={0} label="Score" value={score} />
			<EndScreenStatItem i={1} label="Accuracy" value="{accuracy.toFixed(0)}%" />
			<EndScreenStatItem i={2} label="Highscore" value={oldHighscore} beat={score > oldHighscore} />
		</EndScreenStatsContainer>
		<div
			class="flex flex-grow items-end justify-center gap-1"
			in:fly={{ duration: 200, y: -30, delay: 1750 }}
		>
			<Button
				variant="secondary"
				class="w-28"
				onclick={() => {
					goto('/');
				}}>Home</Button
			>
			<Button
				variant="primary"
				class="w-28"
				onclick={() => {
					fState.send('restart');
				}}>Restart</Button
			>
		</div>
	</EndScreenContent>
</EndScreenContainer>
