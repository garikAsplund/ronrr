<script lang="ts">
  import { page } from '$app/state';
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';
  import DonateButton from './DonateButton.svelte';
  import Logo from './Logo.svelte';

  // reactive current path
  let current = $derived(page.url.pathname);

  // your nav items
  const nav = [
    { href: '/about',     label: 'About' },
    { href: '/services',  label: 'Services' },
    { href: '/staff-board', label: 'Staff & Board' },
    { href: '/meetings-activities', label: 'Meetings & Activities' },
    { href: '/contact',   label: 'Contact' }
  ];

  const linkClasses = (href: string) =>
    current === href
      ? 'text-gray-900 font-semibold underline decoration-gray-900 underline-offset-4'
      : 'text-gray-700 hover:text-gray-900';
</script>

<div class="flex w-full items-center pt-4">
  <a href="/" class="flex-none pl-4">
    <div class="h-24 w-24"><Logo/></div>
  </a>

  <div class="flex-1 flex justify-center">
    <NavigationMenu.Root>
      <NavigationMenu.List class="flex space-x-6">
        {#each nav as {href, label}}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              href={href}
              class={`transition px-2 py-1 ${linkClasses(href)}`}
            >
              {label}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        {/each}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </div>

  <div class="flex-none px-6">
    <DonateButton/>
  </div>
</div>