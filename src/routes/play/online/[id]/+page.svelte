<script lang="ts">
	import {
		collection,
		doc,
		getDoc,
		getDocs,
		getFirestore,
		onSnapshot,
		query,
		where,
	} from "firebase/firestore";
	import { firebaseConfig } from "$lib/firebase/config";
	import { initializeApp } from "firebase/app";
	import { onMount } from "svelte";
	import { load } from "./+page.js";
	import PlayerBanner from "$lib/components/PlayerBanner.svelte";
	import { getAuth } from "firebase/auth";
	export let data;

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
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
		console.log(gamesArray[0]);
		return gamesArray[0];
	}

	let unsub: any;

	async function getUserProfile(uid: string) {
		const docRef = doc(db, "profiles", uid);
		const docSnap = await getDoc(docRef);

		return docSnap.data();
	}

	async function loadData() {
		var gameData = await getGameData();
		var managerdata = await getUserProfile(gameData.data.manageruid);

		players = {
			manager: managerdata,
		};

		unsub = onSnapshot(doc(db, "games", gameData.id), async (doc) => {
			var oppenentdata;
			if (doc.data().opponentuid) {
				oppenentdata = await getUserProfile(doc.data().opponentuid);
			}
			players = {
				manager: managerdata,
				opponent: oppenentdata,
			};
		});

		dataloaded = true;
	}

	loadData();
</script>

{#if dataloaded}
	<div class="content">
		<h2>Waiting for host to start...</h2>
		<p>Code: {data.id}</p>

		<div class="verses">
			<div class="left">
				{#if players.manager}
					<PlayerBanner data={players.manager} />
				{/if}
			</div>
			<div class="vs">Vs.</div>
			<div class="right">
				{#if players.opponent}
					<PlayerBanner data={players.opponent} right={true} />
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.verses {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		gap: 20px;
		align-items: center;
		margin-top: 50px;
	}
	.vs {
		font-size: 25px;
		font-weight: 600;
		justify-self: center;
	}
	.left, .right {
		display: grid;
		justify-items: center;
	}
	@media screen and (max-width: 615px) {
		.verses {
			grid-template-columns: 1fr;
			gap: 5px;
		}
		.left, .right {
			width: 300px;
			max-width: 100%;
		}
		.right {
			justify-self: right;
			text-align: right;
		}
	}
</style>
