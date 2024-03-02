import { writable } from "svelte/store";

export const timeRemaining = writable(45000);
export const score = writable(0);
export const increment = writable(0);