import { writable } from "svelte/store";
export let tableDataStore = writable([
    {
        name: "",
        correct: "",
    },
]);

export let gameStarted = writable(false);

export let gameLoaded = writable(false);