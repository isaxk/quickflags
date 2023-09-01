<script>
    export let gameScore;
    export let timeRemaining;
    export let profileImageURL;

    let gameScoreFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 5,
		minimumFractionDigits: 0,
	});
	let timeRemainingFormat = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: 2,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
</script>

<header>
    <h3>FlameFlags</h3>
    <div class="data">
        <div class="score">{gameScoreFormat.format(gameScore)}</div>
        <div class="time-remaining">{timeRemainingFormat.format(timeRemaining)}</div>
        {#if profileImageURL}
            <div class="profile-image"><img src={profileImageURL} alt="Signed In"></div>
        {:else}
        <div class="profile-image"></div>
        {/if}
        
    </div>
</header>

<style>
    header {
        display: grid;
        grid-template-columns: 1fr max-content;
    }
    .data {
        display: grid;
        height: 50px;
        align-items: center;
        grid-template-columns: 1fr 1fr max-content;
        gap: 2rem;
        text-align: right;
    }
    .score, .time-remaining {
        font-family: 'PT Mono', monospace;
        text-align: right;
    }
    .profile-image img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>