<script>
    import AutoBox from "../lib/AutoBox.svelte";
    import FlagImage from "../lib/FlagImage.svelte";
    import countries from "../lib/countries.js";
    import { tableDataStore, gameStarted, gameLoaded } from "../lib/data-store";
    import Table from "../lib/Table.svelte";
    import { slide, fade, draw, scale, fly } from "svelte/transition";
    import {
        getFirestore,
        collection,
        doc,
        getDoc,
        setDoc,
    } from "firebase/firestore";
    import { getAuth } from "firebase/auth";

    export let app;

    let currentCCode = "blank";
    let currentCountry;
    let submittedCountry = " ";
    let timeleft = 45;
    let score = 0;
    let timer;
    let start;
    let end;
    let gameEnded = false;
    let qsHistory = [];
    let addedScore = 0;
    let messageContent = "Click the box to start the game.";
    let correctcountries = 0;
    let endmessage = "";

    let gameStartedLocal;
    let gameLoadedLocal;

    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore(app);
    let gamesPlayedRef = collection(db, "gamesplayed");
    const docRef = doc(db, "gamesplayed", user.uid);

    function addToGamesPlayed() {
        gamesPlayedRef = collection(db, "gamesplayed");
        console.log(gamesPlayedRef);
    }
    addToGamesPlayed();

    gameStarted.subscribe((value) => {
        gameStartedLocal = value;
    });
    gameLoaded.subscribe((value) => {
        gameLoadedLocal = value;
    });

    function randomCountry() {
        var i = Math.floor(Math.random() * countries.length);
        return countries[i];
    }

    function endGame() {
        if(gameEnded) return;
        gameEnded = true;
        gameStarted.set(false);

        getDoc(doc(db, "gamesplayed", user.uid)).then(async (docSnap) => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                var currentGamesPlayed = docSnap.data().gamesPlayed;
                await setDoc(doc(gamesPlayedRef, user.uid), {
                    gamesPlayed: currentGamesPlayed + 1,
                    uid: user.uid
                });
            } else {
                await setDoc(doc(gamesPlayedRef, user.uid), {
                    gamesPlayed: 1,
                    uid: user.uid
                });
            }
        });

        /* getDoc(doc(db, "recentaverage", user.uid)).then(async (docSnap) => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                var currentGamesPlayed = docSnap.data().gamesPlayed;
                await setDoc(doc(db, "recentaverage", user.uid), {
                    gamesPlayed: currentGamesPlayed + 1,
                    uid: user.uid
                });
            } else {
                await setDoc(doc(db, "recentaverage", user.uid), {
                    gamesPlayed: 1,
                    uid: user.uid
                });
            }
        }); */

        getDoc(doc(db, "highscore", user.uid)).then(async (docSnap) => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                var currentHighscore = docSnap.data().highscore;

                if (score > currentHighscore) {
                    await setDoc(doc(db, "highscore", user.uid), {
                        highscore: score,
                        uid: user.uid
                    });
                    endmessage=endmessage+"<br>New highscore!<br>";
                }
            } else {
                await setDoc(doc(db, "highscore", user.uid), {
                    highscore: score,
                    uid: user.uid
                });
            }
        });

        if (correctcountries >= qsHistory.length && score > 30000) {
            getDoc(doc(db, "achievements", user.uid)).then(async (docSnap) => {
                if (docSnap.exists()) {
                    await setDoc(doc(db, "achievements", user.uid), {
                        flawless: true,
                        uid: user.uid
                    });
                }
            });
        }
    }

    function newCountry() {
        messageContent = " ";
        currentCountry = randomCountry();
        console.log(currentCountry);
        currentCCode = currentCountry.Code.toLowerCase();
    }

    $: currentCCode = currentCCode;

    function checkCountry(c) {
        if (timeleft > 45) return;
        if (!currentCountry) return;
        console.log(c.toLowerCase());
        console.log(currentCountry.name.toLowerCase());
        if (
            currentCountry.name.toLowerCase().replace(/\s/g, "") ==
                c.toLowerCase().replace(/\s/g, "") ||
            currentCountry.short.toLowerCase() == c.toLowerCase()
        ) {
            score = score + 4000;
            addedScore = 4000;
            messageContent = currentCountry.name + " was correct!";
            var qsHistoryTemp = {
                Country: currentCountry.name,
                Answered: '"' + c + '"',
                "Correct?": "correct",
            };
            correctcountries++;
            qsHistory.push(qsHistoryTemp);
        } else if (c == "pass") {
            messageContent =
                "Passed. Correct answer was " + currentCountry.name + "!";
            var qsHistoryTemp = {
                Country: currentCountry.name,
                Answered: "Pass",
                "Correct?": "incorrect",
            };
            addedScore = -1000;
            score = score - 1000;
            qsHistory.push(qsHistoryTemp);
        } else {
            var qsHistoryTemp = {
                Country: currentCountry.name,
                Answered: '"' + c + '"',
                "Correct?": "incorrect",
            };
            messageContent =
                "Incorrect. Correct answer was " + currentCountry.name + "!";
            addedScore = -1000;
            score = score - 1000;
            qsHistory.push(qsHistoryTemp);
        }
        setTimeout(() => (addedScore = 0), 1800);
        setTimeout(() => (messageContent = " "), 1800);
        currentCCode = "";
        setTimeout(newCountry, 1300);
        submittedCountry = null;
    }

    let pointszeros = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 5,
        minimumFractionDigits: 0,
    });
    let timezeros = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 2,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    $: {
        if (submittedCountry != "") {
            checkCountry(submittedCountry);
        }
    }

    function startTimer() {
        start = Date.now();
        end = start + 45000;
        timer = setInterval(() => {
            if (Date.now() >= end+100) return;
            if (Date.now() >= end) {
                endGame();
                window.clearInterval(timer);
                timeleft = 0;
            } else {
                timeleft = (end - Date.now()) / 1000;
            }
        }, 10);
    }
    console.log(gameStartedLocal);
    $: {
        console.log(gameStartedLocal);
        if (gameStartedLocal == true) {
            startTimer();
            newCountry();
        }
    }

    /* setInterval(() => {
        window.scrollTo(0, 0)
    }, 100); */
    /* startTimer();
    newCountry(); */
</script>

<div class="game" transition:fade>
    <div class="header" transition:slide>
        <div class="title">FlameFlags<span class="beta">BETA</span></div>

        <div class="time">{timezeros.format(timeleft)}</div>

        <div class="score-container">
            <div class="score">{pointszeros.format(score)}</div>

            {#if addedScore < 0}
                <div class="addedscore incorrect" transition:scale>
                    {addedScore}
                </div>
            {:else if addedScore > 0}
                <div class="addedscore correct" transition:scale>
                    +{addedScore}
                </div>
            {:else}
                <div class="addedscore" />
            {/if}
        </div>
    </div>

    {#if !gameEnded}
        <div class="flag-container" transition:fade>
            {#key messageContent}
                <div class="message" transition:fade>
                    {messageContent}
                </div>
            {/key}
            {#key currentCCode}
                <div class="con" transition:fade>
                    {#if currentCCode}
                        <img
                            transition:fade
                            src={"/flags/" + currentCCode + ".svg"}
                            alt="flag"
                        />
                    {/if}
                </div>
            {/key}
        </div>

        <div class="message-container" />
    {:else}
        <div class="endscreen" transition:slide>
            <div class="endmessage">{@html endmessage}</div>

            <p>Well done. You got a score of {pointszeros.format(score)}!</p>

            <button on:click={() => gameLoaded.set(false)} class="primary"
                >Exit to main menu</button
            >

            <Table tableData={qsHistory} />
        </div>
    {/if}

    <div class="autoboxcontainer">
        {#if !gameEnded}
            <AutoBox
                on:click={() => {
                    startTimer();
                    newCountry();
                }}
                bind:submitted={submittedCountry}
            />
        {/if}
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

    img,
    .flag-container {
        width: 180px;
        height: 130px;
        position: relative;
        display: grid;
        place-items: center;
    }
    .flag-container {
        margin: auto;
        margin-top: 80px;
    }
    img {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .endmessage .desc {
        font-size: 12px;
    }
    .message {
        position: absolute;
        width: 180px;
        height: 130px;
        top: 0px;
        height: 0px;
        display: grid;
        place-content: center;
    }
    @media screen and (min-width: 650px) {
        img,
        .flag-container {
            width: 400px;
            height: 300px;
        }
        .message {
            width: 100%;
            height: 300px;
            font-size: 23px;
        }
    }
    @media screen and (max-width: 650px) {
        .message {
            width: 300px;
            height: 130px;
        }
    }
    .game {
        width: 100%;
        display: grid;
        place-items: center;
    }
    .time,
    .score,
    .addedscore {
        font-size: 20px;
        text-align: right;
        font-family: "Source Code Pro", monospace;
    }
    .addedscore.correct {
        color: green;
    }
    .addedscore.incorrect {
        color: red;
    }
    .autoboxcontainer {
        width: 100%;
        margin: auto;
        padding: 30px 0px 0px 0px;
    }

    .header {
        position: absolute;
        top: 0px;
        left: 0px;
        margin: 0px;
    }
    .endscreen {
        margin-top: 90px;
    }
    .beta {
        background-color: rgba(255, 255, 0, 0.533);
        padding: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 0.8em;
        color: black;
    }
</style>
