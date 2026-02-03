<svelte:head>
	<title>River of No Return Recovery Center</title>
</svelte:head>

<section
	class="relative flex h-[64vh] items-center justify-center w-full
         overflow-hidden bg-gray-800"
>
	<!-- responsive optimized image -->
	<enhanced:img
		src="/static/hero.jpg"
		alt="Scenic river"
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<!-- dark overlay for text contrast -->
	<div class="absolute inset-0 bg-black/30"></div>

	<!-- content -->
	<div class="relative z-10 max-w-xl space-y-6 px-6 text-center text-white">
		<h1 class="text-4xl font-bold sm:text-5xl">River of No Return Recovery Center</h1>
		<p class="text-lg leading-relaxed">
			Through <em>advocacy, education, and peer connection</em>, River of No Return Recovery Center works to
			strengthen individuals, families, and the broader community — one recovery journey at a time.
		</p>
		<a
			href="/facebook"
			class="inline-block rounded bg-gray-500
             px-6 py-3 text-lg
             font-semibold text-white transition hover:bg-gray-600"
		>
			Visit our Facebook Page
		</a>
	</div>
</section>
