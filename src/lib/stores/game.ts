
import type { Country } from "$lib/types";
import { writable, type Writable } from "svelte/store";



export const timeRemaining: Writable<number> = writable(45000);

export const score: Writable<number> = writable(0);

export const increment: Writable<number> = writable(0);

export const currentCountry: Writable<Country|null> = writable(null);

export const incorrectPause: Writable<boolean> = writable();
