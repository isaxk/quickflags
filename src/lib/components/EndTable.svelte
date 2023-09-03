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
				<th>Answered</th>
				<th>Correct</th>
			</tr>
		</thead>
		<tbody>
			{#each tableData as question, i}
				<tr>
					<td>{i + 1}.</td>
					<td><img src="/flags/{question.code.toLowerCase()}.webp" alt="Flag" /></td>
					<td>{question.name}</td>
                    {#if question.answered == "Pass"}
                    <td>{question.answered}</td>
                    {:else}
					<td>"{question.answered}"</td>
                    {/if}
                    {#if question.isCorrect}
						<td class="correct"><i class="fa-solid fa-check" /></td>
					{:else}
						<td class="incorrect"><i class="fa-solid fa-xmark" /></td>
					{/if}
				</tr>
			{/each}
		</tbody>
	</table>
</figure>

<style>
	.incorrect {
		background-color: #732626;
        text-align: center;
	}
	.correct {
		background-color: #206020;
        text-align: center;
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
