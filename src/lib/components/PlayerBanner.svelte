<script lang="ts">
	export let data: {
		username: string;
		photoURL: string;
		uid: string;
	};

	export let right = false;
</script>

<div class="banner" class:right>
	{#if right}
		<div class="left">
			<div class="username">{data.username}</div>
		</div>
		<div class="right">
			<img
				src={"https://api.dicebear.com/7.x/pixel-art/svg?seed=" + data.uid}
				alt="Profile"
			/>
		</div>
	{:else}
		<div class="left">
			<img
				src={"https://api.dicebear.com/7.x/pixel-art/svg?seed=" + data.uid}
				alt="Profile"
			/>
		</div>
		<div class="right">
			<div class="username">{data.username}</div>
		</div>
	{/if}
</div>

<style>
	.banner {
		display: grid;
		grid-template-columns: 50px 1fr;
		gap: 20px;
		padding: 10px 20px;
		align-items: center;
		background-color: rgba(94, 113, 119, 0.158);
		border-radius: 5px;
	}
    .banner.right {
        grid-template-columns: 1fr 50px;
        text-align: right;
    }
	img {
		border-radius: 5px;
	}
	.username {
		font-size: 25px;
		font-weight: 500;
	}
</style>
