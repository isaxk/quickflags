import { browser } from "$app/environment";
import { onMount } from "svelte";
import { writable, type Writable } from "svelte/store";

export const sfxEnabled: Writable<boolean> = writable(true);

if (browser) {
    if (localStorage.sfxEnabled) {
        sfxEnabled.set(JSON.parse(localStorage.sfxEnabled));
    }
    sfxEnabled.subscribe(v => {
        localStorage.sfxEnabled = JSON.stringify(v);
    });
}