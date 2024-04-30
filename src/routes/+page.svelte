<script>
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>QuickFlags</title>
</svelte:head>

<div class="h-screen flex flex-col">
	<div class="flex justify-center items-center h-full text-center">
		<div class="flex justify-items-center flex-col">

			<div class="px-20">
				<h1 class="text-5xl font-bold mb-2">QuickFlags</h1>
				<h3 class="text-xl">Fast paced, flag guessing game</h3>
				<div class="flex justify-center py-3 gap-4 items-center">
					<Button>Play</Button>
				</div>
			</div>

			<div class="border-t-2 border-neutral-800 my-3 mb-6"></div>

			<div class="flex text-xl px-20">
				<div class="text-left w-full">
					<p>Highscore:</p>
					<p>Games Completed:</p>
				</div>
				<div class="text-right font-mono">
					<p>000000</p>
					<p>00</p>
				</div>
			</div>

		</div>
	</div>
	<div class="py-10 text-gray-400 flex justify-center gap-4">
		<div>isaxk.com</div>
		<div>Made with SvelteKit</div>
		<div>Project on Github</div>
	</div>
</div>
