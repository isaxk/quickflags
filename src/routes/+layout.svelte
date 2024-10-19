<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

<ModeWatcher />

<main class="mx-auto h-screen max-w-screen-lg">
	<slot></slot>
</main>
