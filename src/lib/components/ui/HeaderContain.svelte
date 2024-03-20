<script>
	import { fade } from "svelte/transition";
</script>

<div class="nav-container">
	<nav>
		<ul>
			<li><a href="/">QuickFlags</a></li>
		</ul>
		<ul>
			<slot />
		</ul>
	</nav>
</div>

<style>
	nav {
		height: 100%;
		box-sizing: border-box;
		width: 100%;
		max-width: 950px;
		width: 100%;
		margin: auto;
		padding: 0px 20px;
        
	}
	.nav-container {
		height: 120px;
		width: 100%;
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		margin: auto;

	}
</style>
