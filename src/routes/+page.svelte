<script>
	import alfagames from '$lib/images/alfagame-logo.webp'
	import alfagames_fallback from '$lib/images/alfagame-logo.png'
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col items-center justify-center mt-60 text-black/80">
	<h1>
		<span class="w-80 block">
			<picture>
				<source srcset={alfagames} type="image/webp" />
				<img src={alfagames_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
</section>
