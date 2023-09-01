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
		background-color: #732626;
	}
	.correct {
		background-color: #206020;
	}
	@media (prefers-color-scheme: light) {
		.incorrect {
			background-color: #ffa3a3;
		}
		.correct {
			background-color: #a3ffa3;
		}
	}
</style>
