<script lang="ts">
	import FlagBackground from "$lib/components/FlagBackground.svelte";
</script>

<FlagBackground>
	<a href="/play" class="play-button" role="button">Play</a>
</FlagBackground>

<article>
	<h3>Welcome to v3!</h3>
	<h5>What's new?</h5>
	<ul>
		<li>Smoother Animations</li>
		<li>Refined UI</li>
		<li>Gameplay improvements and balancing</li>
	</ul>
</article>

<footer>
	<div class="copyright">Copyright &copy; isaxk.com 2024</div>
	<div class="right">
		<div class="version">v3.0.0</div>
	</div>
</footer>

<style>
	article {
		margin-top: 50px;
	}
	.play-button {
		padding-right: 30px;
		padding-left: 30px;
	}
	footer {
		width: 100%;
		margin: auto;
		box-sizing: border-box;
		padding: 50px 10px;
		font-size: 15px;
		display: grid;
		grid-template-columns: 1fr max-content;
	}
	.right {
		text-align: right;
		display: flex;
		justify-items: right;
	}
</style>
