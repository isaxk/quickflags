<script>
    export let tableData;
</script>

<table>
    <thead>
        <tr>
            {#each Object.keys(tableData[0]) as columnHeading}
                <th>{columnHeading}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(tableData) as row}
            <tr>
                {#each Object.values(row) as cell}
                    {#if cell == "incorrect"}
                        <td class="incorrect">{cell}</td>
                    {:else if cell == "correct"}
                        <td class="correct">{cell}</td>
                    {:else}
                        <td>{cell}</td>
                    {/if}
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

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
