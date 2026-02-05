<script>
	import { ExternalLink } from '@lucide/svelte';
	import heroDesktop from '$lib/assets/hero-desktop.jpg?enhanced';
	import heroMobile from '$lib/assets/hero-mobile.png?enhanced';

	let { isMobile = false} = $props();
</script>

<svelte:head>
	<title>River of No Return Recovery Center | Salmon, ID</title>
	<link rel="preload" as="image" href={isMobile ? heroMobile.img.src : heroDesktop.img.src} />
</svelte:head>

<section
	class="relative flex h-[64vh] items-center justify-center
         overflow-hidden bg-gray-800 w-screen"
>
	{#if isMobile}
		<!-- Mobile hero: only this image ends up in the DOM -->
		<enhanced:img
			src={heroMobile}
			alt="Misty mountains with pine trees and dry grass"
			class="absolute inset-0 h-full w-full object-cover"
			sizes="100vw"
			fetchpriority="high"
		/>
	{:else}
		<!-- Desktop hero -->
		<enhanced:img
			src={heroDesktop}
			alt="Misty mountains with pine trees and dry grass"
			class="absolute inset-0 h-full w-full object-cover"
			sizes="100vw"
			fetchpriority="high"
		/>
	{/if}

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
