<script>
    import countries from "./countries";
    import { tableDataStore, gameLoaded, gameStarted } from "../lib/data-store";

    export let submitted;

    /* let prediction = ""; */
    let currentVal;

    function handleKeyUp(e) {
        if (e.key == "Enter" && currentVal == "") {
            submitted = "pass";
            return;
        }
        if (
            countries.find(
                (o) =>
                    o.name.toLowerCase().replace(/\s/g, "") ==
                    currentVal.toLowerCase().replace(/\s/g, "")
            ) ||
            countries.find(
                (o) => o.short.toLowerCase() == currentVal.toLowerCase()
            )
        ) {
            submitted = currentVal.toLowerCase();
            currentVal = "";
        }
    }
</script>

<div class="container">
    <!-- svelte-ignore a11y-autofocus -->
    <input
        on:click={() =>{ gameStarted.set(true); console.log("start")}}
        autocomplete="off"
        id="autobox"
        on:keyup={handleKeyUp}
        bind:value={currentVal}
        placeholder="Enter a country..."
    />
</div>

<style>
    input {
        font-size: 17px;
        padding-left: 0px;
        text-indent: 17.15px;
        margin: 0px auto;
        z-index: 5;
        position: absolute;
        left: 0px;
        top: 0px;
        background-color: transparent;
    }
    .container {
        position: relative;
    }

    .predictive {
        font-size: 17px;
        position: absolute;
        top: 14px;
        left: 17.05px;
        z-index: 1;
        color: grey;
        opacity: 0;
    }
</style>
