
import { writable, type Writable } from "svelte/store";

interface Country {
    name: string;
    code: string;
    short: string;
    easy: number;
}

export const timeRemaining: Writable<number> = writable(45000);
export const score: Writable<number> = writable(0);
export const increment: Writable<number> = writable(0);
export const currentCountry: Writable<Country> = writable();
export const incorrectPause: Writable<boolean> = writable();
