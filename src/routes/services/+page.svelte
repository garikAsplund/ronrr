<script lang="ts">
  import {
    Handshake,
    Home,
    Users,
    Briefcase,
    Flag,
    UserCheck,
    Music,
    Globe,
    CigaretteOff
  } from '@lucide/svelte';

  const services = [
    { label: 'Recovery Coaching & Peer Support', icon: Handshake },
    { label: 'Re-entry Services',            icon: Home      },
    { label: 'Support Groups & Education',    icon: Users     },
    { label: 'Employment & Life Skills',      icon: Briefcase },
    { label: 'Grief & Veteran Support',       icon: Flag      },
    { label: 'Parenting Classes',             icon: UserCheck },
    { label: 'Tobacco & Nicotine Cessation',  icon: CigaretteOff     },
    { label: 'Sober Social Activities',       icon: Music     },
    { label: 'Computers & Internet Access',   icon: Globe     }
  ];
</script>

<main class="mx-auto max-w-5xl px-4 py-12 space-y-12">
  <!-- heading with left accent bar -->
  <div class="flex justify-center w-full">
    <h2 class="text-3xl font-bold text-teal-900">Our Services</h2>
  </div>

  <!-- responsive grid: 1col / 2col sm / 3col md / 4col lg -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each services as { label, icon }}
      <div class="flex flex-col items-center text-center px-4">
        <svelte:component
          this={icon}
          class="h-12 w-12 text-teal-800 mb-4"
        />
        <p class="text-lg text-gray-700">{label}</p>
      </div>
    {/each}
  </div>
</main>