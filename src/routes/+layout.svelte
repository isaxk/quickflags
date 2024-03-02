<script lang="ts">
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { initializeApp } from "firebase/app";

	import { browser } from "$app/environment";
	import Header from "$lib/components/Header.svelte";
	import "$lib/css/app.css";
	import "@picocss/pico";
	import { scale } from "svelte/transition";

	import { firebaseConfig } from "$lib/firebase/config";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import {
		addDoc,
		collection,
		doc,
		getDoc,
		getDocs,
		getFirestore,
		query,
		setDoc,
		where,
	} from "firebase/firestore";

	export let data;

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);

	let currentUser: any;
	let currentUserProfile: any = {
		data: null,
	};
	let mounted = false;

	onMount(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				var userProfile = await getUserProfile(user.uid, user);
				currentUserProfile = userProfile;
				currentUser = user;
			} else {
				goto("/");
				currentUser = null;
				currentUserProfile = null;
			}
		});
		mounted = true;
	});

	async function getUserProfile(uid: string, user:any) {
		const docRef = doc(db, "profiles", uid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			await setDoc(docRef, {
				username: user.email.substring(0, user.email.indexOf('@')),
				photoURL: user.photoURL,
				uid: user.uid
			});
			return (await getDoc(docRef)).data();
		}
	}
</script>

<Header {currentUser} {app} {currentUserProfile} />

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
