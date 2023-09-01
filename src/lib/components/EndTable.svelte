<script>
	export let tableData;
</script>

<figure>
	<table>
		<thead>
			<tr>
				<th />
				<th>Flag</th>
				<th>Country</th>
				<th>Correct?</th>
				<th>Answered:</th>
			</tr>
		</thead>
		<tbody>
			{#each tableData as question, i}
				<tr>
					<td>{i + 1}.</td>
					<td><img src="/flags/{question.code.toLowerCase()}.svg" alt="Flag" /></td>
					<td>{question.name}</td>
					{#if question.isCorrect}
						<td class="correct">Correct</td>
					{:else}
						<td class="incorrect">Correct</td>
					{/if}
					<td>{question.answered}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</figure>

<style>
	.incorrect {
		background-color: hsl(0, 50%, 30%);
	}
	.correct {
		background-color: hsl(120, 50%, 25%);
	}
	@media (prefers-color-scheme: light) {
		.incorrect {
			background-color: hsl(0, 100%, 82%);
		}
		.correct {
			background-color: hsl(120, 100%, 82%);
		}
	}
</style>
