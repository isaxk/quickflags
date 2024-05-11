<script lang="ts">
    import { format } from "$lib/utils/format";
    import { fly } from "svelte/transition";
    import Countup from "../Countup.svelte";
    import { onMount } from "svelte";

    let highscore: number = 0;
    let gamesCompleted: number = 0;

    onMount(() => {
        if (localStorage.highscore) {
            highscore = localStorage.highscore;
        } else {
            highscore = 0;
        }
        if (localStorage.gamesCompleted) {
            gamesCompleted = localStorage.gamesCompleted;
        } else {
            localStorage.gamesCompleted = 0;
            gamesCompleted = 0;
        }
    });
</script>

<div
    class="absolute top-0 left-0 w-full flex text-xl sm:px-20 py-0"
    transition:fly={{ y: -15, duration: 200 }}
>
    <div class="text-left w-full">
        <p>Highscore:</p>
        <p>Games Completed:</p>
    </div>
    <div class="text-right font-mono">
        <p>
            {#key highscore}
                <Countup value={highscore} duration={500} format={true} />
            {/key}
        </p>
        <p>
            {#key gamesCompleted}
                <Countup value={gamesCompleted} duration={400} format={true} />
            {/key}
        </p>
    </div>
</div>
