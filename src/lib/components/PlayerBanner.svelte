<script lang="ts">
    export let data: {
        username: string,
        photoURL: string
    };
</script>


<div class="banner">
    <div class="left">
        <img src={data.photoURL} alt="Profile">
    </div>
    <div class="right">
        <div class="username">{data.username}</div>
    </div>
</div>

<style>
    .banner {
        display: grid;
        grid-template-columns: 50px 1fr;
        gap: 20px;
        padding: 10px;
        align-items: center;
        background-color: rgba(94, 113, 119, 0.158);
        border-radius: 5px;
    }
    .left img {
        border-radius: 50%;
    }
    .username {
        font-size: 25px;
        font-weight: 500;
    }
</style>