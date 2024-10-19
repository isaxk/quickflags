<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let {
		key,
		EnabledIcon,
		DisabledIcon,
		defaultVal
	}: { key: string; EnabledIcon: any; DisabledIcon: any; defaultVal: boolean } = $props();

	let toggled = $state(defaultVal);

	function handleClick() {
		toggled = !toggled;
		localStorage.setItem(key, JSON.stringify(toggled));
	}

	onMount(() => {
		if (browser) {
			toggled = JSON.parse(localStorage.getItem(key) ?? defaultVal.toString());
		}
	});
</script>

<button
	onclick={handleClick}
	class="flex h-10 w-10 items-center justify-center rounded-full transition-all"
>
	{#if toggled}
		<EnabledIcon />
	{:else}
		<DisabledIcon />
	{/if}
</button>
