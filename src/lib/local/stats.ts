import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const highscore = writable(0);
export const gamesPlayed = writable(0);


$: if(browser) {
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
