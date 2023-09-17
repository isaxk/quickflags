<script>
    import { page } from '$app/stores';
</script>

<header>
    <a href="/"><i class="fa-solid fa-arrow-left"></i> Back to home page</a>
</header>

<h2>Oops</h2>

<hr />

<h3>Something went wrong!</h3>

<p>{$page.status}: {$page.error?.message}</p>