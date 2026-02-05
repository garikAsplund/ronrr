<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href={favicon} />
	<!-- Primary Meta Tags -->
	<title>River of No Return Recovery Center | Salmon, ID</title>
	<meta
		name="description"
		content="Peer-led 501(c)(3) recovery center in Salmon, Idaho offering free support services for substance use and co-occurring mental health challenges."
	/>
	<link rel="canonical" href="https://riverofnoreturnrecovery.org" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://riverofnoreturnrecovery.org" />
	<meta property="og:title" content="River of No Return Recovery Center" />
	<meta
		property="og:description"
		content="Peer-led nonprofit recovery center providing free support services in rural Idaho."
	/>
	<meta property="og:image" content="https://riverofnoreturnrecovery.org/og-card.png" />
	<meta property="og:site_name" content="River of No Return Recovery Center" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@YourOrgTwitter" />
	<meta name="twitter:title" content="River of No Return Recovery Center" />
	<meta
		name="twitter:description"
		content="Peer-led nonprofit recovery center providing free support services in rural Idaho."
	/>
	<meta name="twitter:image" content="https://riverofnoreturnrecovery.org/og-card.png" />

	<!-- JSON-LD Organization Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "NGO",
			"name": "River of No Return Recovery Center",
			"url": "https://riverofnoreturnrecovery.org",
			"logo": "https://riverofnoreturnrecovery.org/logo.jpg",
			"description": "Peer-led 501(c)(3) recovery center in Salmon, Idaho offering free support services for substance use and co-occurring mental health challenges.",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "909 Main St.",
				"addressLocality": "Salmon",
				"addressRegion": "ID",
				"postalCode": "83467",
				"addressCountry": "US"
			},
			// "contactPoint": [
			// 	{
			// 		"@type": "ContactPoint",
			// 		"telephone": "+1-208-555-0123",
			// 		"contactType": "Customer Service",
			// 		"areaServed": "US"
			// 	}
			// ],
			"sameAs": ["https://www.facebook.com/profile.php?id=61582635811286"]
		}
	</script>
</svelte:head>

<div
	class="flex h-full min-h-screen w-full flex-col items-center selection:bg-black selection:text-slate-200 dark:selection:bg-yellow-400 dark:selection:text-black"
>
	<a
		href="#main-content"
		class="sr-only z-100 rounded bg-white px-2 py-1
         text-gray-900 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
	>
		Skip to main content
	</a>
	<NavBar />
	<main id="main-content">
		{@render children()}
	</main>
	<Footer />
</div>
