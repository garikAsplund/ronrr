<script lang="ts">
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import DonateButton from './DonateButton.svelte';
	import Logo from './Logo.svelte';

	// reactive current path
	let current = $derived(page.url.pathname);

	// toggle for mobile menu
	let mobileOpen = $state(false);

	const nav = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/staff-board', label: 'Staff & Board' },
		{ href: '/meetings-activities', label: 'Meetings & Activities' },
		{ href: '/contact', label: 'Contact' }
	];

	const linkClasses = (href: string) =>
		current === href
			? 'text-gray-900 font-semibold underline decoration-gray-900 underline-offset-2'
			: 'text-gray-700 hover:text-gray-900';
</script>

<header class="w-full z-50">
	<div class="flex w-full items-center justify-between px-4 py-3 md:py-4 md:px-16">
		<!-- Logo -->
		<a href="/" class="flex-none"><Logo class="h-12 w-12 md:h-24 md:w-24" /></a>

		<!-- desktop nav -->
		<nav class="hidden flex-1 justify-center md:flex">
			<NavigationMenu.Root>
				<NavigationMenu.List class="flex space-x-8">
					{#each nav as { href, label }}
						<NavigationMenu.Item>
							<NavigationMenu.Link {href} class={`px-2 py-1 transition ${linkClasses(href)}`}>
								{label}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					{/each}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</nav>

		<!-- desktop donate -->
		<div class="hidden md:block shrink-0"><DonateButton /></div>

		<!-- mobile hamburger -->
		<button
			class="p-2 text-gray-700 hover:text-gray-900 md:hidden"
			aria-label="Toggle menu"
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				<!-- X icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<!-- Hamburger -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
	</div>
</header>

{#if mobileOpen}
	<!-- full-screen overlay -->
	<div
		class="fixed inset-0 z-40 flex flex-col
           items-center justify-center space-y-6 bg-white/75 backdrop-blur-sm"
	>
		<NavigationMenu.Root>
			<NavigationMenu.List class="flex flex-col space-y-4">
				{#each nav as { href, label }}
					<NavigationMenu.Item>
						<NavigationMenu.Link
							{href}
							class={`text-2xl ${linkClasses(href)}`}
							onclick={() => (mobileOpen = false)}
						>
							{label}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>
		<div class="mt-auto mb-12 w-2/3">
			<DonateButton />
		</div>
	</div>
{/if}
