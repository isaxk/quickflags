<script lang="ts">
	import {
		collection,
		doc,
		getDoc,
		getDocs,
		getFirestore,
		query,
		where,
	} from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebase/config";
	import { initializeApp } from "firebase/app";
	import { onMount } from "svelte";
	import { load } from "./+page.js";
	import PlayerBanner from "$lib/components/PlayerBanner.svelte";
	export let data;

	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	let dataloaded = false;
	let players: any;

	async function getGameData() {
		const gamesRef = collection(db, "games");
		const q = query(gamesRef, where("joincode", "==", data.id.toString()));
		const querySnapshot: any = await getDocs(q);

		let gamesArray: any = [];

		querySnapshot.forEach((doc: any) => {
			gamesArray.push({
				id: doc.id,
				data: doc.data(),
			});
		});
		return gamesArray[0];
	}

	async function getUserProfile(uid: string) {
		const docRef = doc(db, "profiles", uid);
		const docSnap = await getDoc(docRef);

		return docSnap.data();
	}

	async function loadData() {
		let gameData: any = await getGameData();

		players = {
			manager: await getUserProfile("eI8DdSo4iTN7RhjTizmLhuKp9Nx1"),
		};

		dataloaded = true;
	}

    loadData();
</script>

{#if dataloaded}
	<div class="content">
		<h2>Waiting for host to start...</h2>
		<p>Code: {data.id}</p>

		<PlayerBanner data={players.manager}/>
	</div>
{/if}
