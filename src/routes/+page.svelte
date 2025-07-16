<script>
	import { goto } from '$app/navigation';
	import StatsTable from '$lib/components/home/stats-table.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { Github, User } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ x: 30, duration: 200 }}
	out:fly={{ x: 20, duration: 100 }}
	class="flex h-screen w-full items-center px-10"
>
	<div class="flex h-52 w-full flex-col gap-20 sm:flex-row sm:gap-10">
		<div class="flex-grow text-center sm:text-left">
			<h1 class="text-5xl font-bold">QuickFlags</h1>
			<h3 class="text-md pb-3 font-medium sm:pb-4 sm:text-lg">
				Fast paced, simple, flag knowledge game.
			</h3>
			<div
				class="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
			>
				<Button variant="primary" class="px-7" onclick={() => goto('/play')}>Play</Button>
				<div class="flex">
					<a
						href="https://github.com/isaxk/quickflags"
						class="flex items-center gap-1 border-r border-r-zinc-500/50 px-2 text-sm hover:underline"
					>
						<Github size="18" /> GitHub Project
					</a>
				
				</div>
			</div>
		</div>
		<div class="flex flex-grow flex-col text-center sm:w-1/3 sm:text-left">
			<div class="pb-2 pl-2 text-3xl font-semibold">Stats</div>
			<StatsTable />
		</div>
	</div>
</div>
