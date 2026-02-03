<script lang="ts">
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';
  import DonateButton from './DonateButton.svelte';
  import Logo from './Logo.svelte';
</script>

<div class="flex w-full items-center pt-4">
  <!-- logo on the left -->
  <a href="/" class="flex-none pl-4">
    <div class="h-24 w-24"><Logo/></div>
  </a>

  <!-- nav takes all the remaining space and centers its children -->
  <div class="flex-1 flex justify-center">
    <NavigationMenu.Root>
      <NavigationMenu.List class="flex space-x-6">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/services">Services</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/staff-board">Staff &amp; Board</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/meetings-activities">
            Meetings &amp; Activities
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/contact">Contact</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </div>

  <!-- donate on the right -->
  <div class="flex-none px-6">
    <DonateButton/>
  </div>
</div>