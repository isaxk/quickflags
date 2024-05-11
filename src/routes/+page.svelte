<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ShowHideToggle from "$lib/components/ShowHideToggle.svelte";
    import Banner from "$lib/components/home/Banner.svelte";
    import Stats from "$lib/components/home/Stats.svelte";
    import { fade, slide, crossfade, draw, fly } from "svelte/transition";
</script>

<svelte:head>
    <title>QuickFlags</title>
</svelte:head>

<div class="h-screen flex flex-col w-full">
    <Banner href="/info"
        >Gaza conflict, ethics and more info. <i
            class="fa-solid fa-arrow-up-right-from-square ml-1"
        ></i></Banner
    >
    <div class="flex justify-center items-center h-full text-center">
        <div class="flex justify-items-center flex-col">
            <div class="sm:px-20">
                <h1 class="text-5xl font-bold mb-2">QuickFlags</h1>
                <h3 class="text-xl text-neutral-300">
                    Fast paced, simple, flag knowledge game.
                </h3>
                <div class="flex justify-center py-3 gap-4 items-center">
                    <Button href="/play">Play</Button>
                </div>
            </div>
            <ShowHideToggle text="Stats">
                <div class="relative">
                    <Stats />
                </div>
            </ShowHideToggle>
        </div>
    </div>
    <div
        class="py-10 text-gray-400 flex flex-col gap-1 sm:flex-row sm:gap-4 justify-center text-center"
    >
        <a href="https://www.isaxk.com">by isaxk</a>
        <a href="https://kit.svelte.dev">made with SvelteKit</a>
        <a href="https://github.com/isaxk/quickflags">Project on Github</a>
    </div>
</div>
