<script>
	import '@unocss/reset/tailwind.css'
	import 'virtual:uno.css'
	import Header from './Header.svelte';
</script>

<div class="min-h-screen bg-white/50 grid grid-rows-[10%_1fr_4rem]">
	<Header />

	<main class="">
		<slot />
	</main>

	<footer class="text-white/80 text-center">
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
