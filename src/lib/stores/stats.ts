import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export const highscore: Writable<number> = writable(0);
export const gamesPlayed: Writable<number> = writable(0);


if(browser) {

    if (localStorage.getItem("highscore")) {
        highscore.set(parseInt(localStorage.highscore));
    }

    if (localStorage.getItem("gamesPlayed")) {
        gamesPlayed.set(parseInt(localStorage.gamesPlayed));
    }
    
    
    highscore.subscribe((v) => {
        localStorage.highscore = v;
    });
    
    gamesPlayed.subscribe((v) => {
        localStorage.gamesPlayed = v;
    })
    
}
