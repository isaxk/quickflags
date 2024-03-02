<script lang="ts">
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { initializeApp } from "firebase/app";

	import { browser } from "$app/environment";
	import Header from "$lib/components/Header.svelte";
	import "$lib/css/app.css";
	import "@picocss/pico";
	import { scale } from "svelte/transition";

	import { firebaseConfig } from "$lib/firebase/config";

	export let data;


	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	let currentUser:any;

	onAuthStateChanged(auth, (user) => {
		if (user) {
			currentUser = user;
		} else {
			currentUser = null;
		}
	});
</script>

<Header currentUser={currentUser} {app} />

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

{#key data.url}
	<div
		class="main"
		in:scale={{ delay: 400, duration: 300, start: 0.992, opacity: 0 }}
		out:scale={{ duration: 300, start: 1.02, opacity: 0 }}
	>
		<slot {app} {auth} />
	</div>
{/key}

<style>
	.main {
		max-width: 800px;
		margin: auto;
		padding: 0px 10px;
		box-sizing: border-box;
		min-height: 80vh;
		position: relative;
	}
</style>
