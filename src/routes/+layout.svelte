<script lang="ts">
	import '$lib/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Superforms Test</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Google+Sans+Text:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Google+Sans:opsz,wght@17..18,400..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="content">
	{@render children()}
</div>

<style>
	.content {
		max-width: 730px;
		margin: 0 auto;
		padding-top: 40px;
	}
</style>
