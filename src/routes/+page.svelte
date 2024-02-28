<script lang="ts">
	import FlagBackground from "$lib/components/FlagBackground.svelte";
</script>


<FlagBackground>
	<a href="/play" class="play-button" role="button">Play</a>
</FlagBackground>

<footer>
	<div class="copyright">
		Copyright &copy; isaxk.com 2024
	</div>
	<div class="right">
		<div class="version">
			v3.0.0
		</div>
	</div>
</footer>

<style>
	.play-button {
		padding-right: 30px;
		padding-left: 30px;
	}
	footer {
		max-width: 800px;
		width: 100%;
		margin: auto;
		box-sizing: border-box;
		padding: 50px 0px;
		position: absolute;
		bottom: 0px;
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
