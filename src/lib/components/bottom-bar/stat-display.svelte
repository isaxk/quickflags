<script>
	import ScoreDisplay from './score-display.svelte';
	import StatDisplayContainer from './stat-display-container.svelte';
	import TimeDisplay from './time-display.svelte';
</script>

<StatDisplayContainer>
	<ScoreDisplay score={10} />
	<TimeDisplay endTime={Date.now() + 60000} />
</StatDisplayContainer>
