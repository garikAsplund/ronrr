<!-- src/lib/components/PeopleTabs.svelte -->
<script lang="ts" context="module">
  /** compile-time only */
  export interface Person {
    name: string
    role: string
    photo?: string
    bio?: string[]
  }
</script>

<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs'

  export let leadershipMembers: Person[] = []
  export let boardMembers: Person[] = []
  export let staffMembers: Person[] = []
  export let defaultValue: 'leadership' | 'board' | 'staff' = 'leadership'
</script>

<Tabs.Root value={defaultValue} class="w-full">
  <!-- big, centered tab row -->
  <Tabs.List class="flex w-full justify-center space-x-12 mb-8">
    {#each ['leadership', 'staff', 'board'] as tab}
      <Tabs.Trigger
        value={tab}
        class="
          text-xl font-semibold px-4 py-2
          data-[state=inactive]:text-teal-600
          data-[state=active]:text-teal-900 border-b-2
          data-[state=active]:border-teal-900
          focus:outline-none
        "
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>

  <!-- panels -->
  {#each ['leadership','board','staff'] as tab}
    <Tabs.Content
      value={tab}
      class="space-y-16 max-w-3xl mx-auto px-6"
    >
      {#each (
        tab === 'leadership' ? leadershipMembers
        : tab === 'board'      ? boardMembers
                               : staffMembers
      ) as person}
        <article class="space-y-4">
          {#if person.photo}
            <img
              src={person.photo}
              alt={person.name}
              class="h-24 w-24 rounded-full mx-auto"
            />
          {/if}
          <h3 class="text-2xl uppercase text-teal-900 font-bold text-center">
            {person.name}
          </h3>
          <p class="text-lg text-teal-700 text-center">{person.role}</p>
          {#if person.bio}
            <div class="space-y-3 text-teal-600 leading-relaxed">
              {#each person.bio as line}
                <p>{line}</p>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </Tabs.Content>
  {/each}
</Tabs.Root>