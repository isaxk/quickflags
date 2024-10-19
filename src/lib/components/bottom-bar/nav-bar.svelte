<script>
	import { RotateCw, ArrowLeft } from 'lucide-svelte';
	import NavBarBtn from './nav-bar-btn.svelte';
	import { goto } from '$app/navigation';
	import { fState } from '$lib/state/index.svelte';
	// import { message } from '$lib/state/index.svelte';
</script>

<div class="flex-grow">
	<div class="flex gap-1">
		<NavBarBtn Icon={ArrowLeft} label="Home" onclick={() => goto('/')} />
		<NavBarBtn Icon={RotateCw} label="Restart" onclick={() => fState.send('restart')} />
	</div>
</div>
