<script>
	import { ExternalLink } from '@lucide/svelte';
</script>

<svelte:head>
	<title>River of No Return Recovery Center | Salmon, ID</title>
</svelte:head>

<section
	class="relative flex h-[64vh] w-full items-center justify-center
         overflow-hidden bg-gray-800"
>
	<!-- responsive optimized image -->
	<enhanced:img
		src="/static/hero.jpg"
		alt="Misty mountains with pine trees and dry grass"
		fetchpriority="high"
		class="absolute inset-0 hidden h-full w-full object-cover md:block"
		sizes="(min-width:768px) 100vw, 100vw"
	/>

	<!-- Mobile only below md -->
	<enhanced:img
		src="/static/hero-mobile.png"
		alt="Misty mountains with pine trees and dry grass"
		fetchpriority="high"
		class="absolute inset-0 block h-full w-full object-cover md:hidden"
		sizes="100vw"
	/>

	<!-- dark overlay for text contrast -->
	<div class="absolute inset-0 bg-black/30"></div>

	<!-- content -->
	<div class="relative z-10 max-w-xl space-y-6 px-6 text-center text-white">
		<h1 class="text-4xl font-bold sm:text-5xl">River of No Return Recovery Center</h1>
		<p class="text-lg leading-relaxed">
			Through <em>advocacy, education, and peer connection</em>, River of No Return Recovery Center
			works to strengthen individuals, families, and the broader community — one recovery journey at
			a time.
		</p>
		<a
			href="/facebook"
			class="inline-block rounded bg-gray-500
             px-6 py-3 text-lg
             font-semibold text-white transition hover:bg-gray-600"
			target="_blank"
		>
			<span class="flex items-center">Visit our Facebook Page &nbsp;<ExternalLink size="20" /></span
			>
		</a>
	</div>
</section>
