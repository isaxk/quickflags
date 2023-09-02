<script>
	import '@picocss/pico';
	import './app.css';
	import { fly, slide, scale } from 'svelte/transition';

	export let data;
</script>

{#key data.url}
	<div
		class="app"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<slot />
	</div>
{/key}

<footer />
