<script lang="ts">
    import { format } from "$lib/utils/format";
    import { fly, slide } from "svelte/transition";
    import BreakdownCard from "./BreakdownCard.svelte";

    export let qHistory: any;
</script>

<div class="w-full flex justify-items-center md:px-8">
    <div
        class="text-left overflow-x-scroll w-full"
        transition:fly={{ y: -15, duration: 200 }}
    >
        <div
            class="answer-grid h-12 border-b-neutral-800 border-b-2 mb-2 font-medium w-full"
        >
            <div></div>
            <div>Flag:</div>
            <div>Correct Answer:</div>
            <div>You answered:</div>
            <div class="text-right">Time:</div>
        </div>
        {#each qHistory as question, i}
            <div class="answer-grid h-14">
                <div>
                    {i}.
                </div>
                <div
                    class="bg-contain bg-center bg-no-repeat w-full h-full"
                    style:background-image="url('https://flagcdn.com/w320/{question.correct.code.toLowerCase()}.webp')"
                ></div>
                <div>
                    {question.correct.name}
                </div>
                {#if question.answered}
                    {#if question.answered == question.correct}
                        <BreakdownCard icon="check" css="bg-green-800"
                            >{question.answered.name}</BreakdownCard
                        >
                    {:else}
                        <BreakdownCard icon="xmark" css="bg-red-800">
                            {question.answered.name}
                        </BreakdownCard>
                    {/if}
                {:else if i == qHistory.length - 1}
                    <BreakdownCard icon="hourglass-end" css="bg-yellow-800">
                        Time ran out
                    </BreakdownCard>
                {:else}
                    <BreakdownCard icon="forward" css="bg-yellow-800">
                        Skipped
                    </BreakdownCard>
                {/if}
                <div class="text-right">
                    {#if i != qHistory.length - 1}
                        <span class="font-mono">
                            {format.answerTime(
                                (question.endTime - question.startTime) / 1000,
                            )}</span
                        >s
                    {:else}
                        <span class="font-mono"> -.--</span>s
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .answer-grid {
        display: grid;
        grid-template-columns:
            15px 50px
            minmax(150px, 1fr)
            minmax(165px, 1fr)
            minmax(50px, 0.3fr);
        align-items: center;
        gap: 20px;
        padding: 5px;
    }
</style>
