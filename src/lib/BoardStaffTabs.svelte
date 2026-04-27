<!-- src/lib/components/PeopleTabs.svelte -->
<script lang="ts" context="module">
	/** compile-time only */
	export interface Person {
		name: string;
		role: string;
		photo?: string;
		photoOffset?: string;
		bio?: string[];
	}
</script>

<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	export let leadershipMembers: Person[] = [];
	export let boardMembers: Person[] = [];
	export let staffMembers: Person[] = [];
	export let defaultValue: 'leadership' | 'board' | 'staff' = 'leadership';
</script>

<Tabs.Root value={defaultValue} class="mx-auto w-full md:max-w-full ">
	<!-- big, centered tab row -->
	<Tabs.List class="mb-8 flex w-full justify-center space-x-12 ">
		{#each ['leadership', 'staff', 'board'] as tab}
			<Tabs.Trigger
				value={tab}
				class="
          cursor-pointer border-b px-4 py-2
          text-xl
          font-semibold focus:outline-none
          data-[state=active]:border-teal-900
          data-[state=active]:text-teal-900 data-[state=inactive]:text-teal-800
        "
			>
				{tab.charAt(0).toUpperCase() + tab.slice(1)}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>

	<!-- panels -->
	{#each ['leadership', 'board', 'staff'] as tab}
		<Tabs.Content value={tab} class="mx-auto max-w-3xl space-y-16 px-6">
			{#each tab === 'leadership' ? leadershipMembers : tab === 'board' ? boardMembers : staffMembers as person}
				<article class="space-y-4">
					{#if person.photo}
						<enhanced:img
							src={person.photo}
							alt={person.name}
							class="mx-auto h-48 w-48 rounded-full object-cover"
							style={person.photoOffset ? `object-position: ${person.photoOffset}` : ''}
						/>
					{/if}
					<h3 class="text-center text-2xl font-bold text-teal-900 uppercase">
						{person.name}
					</h3>
					<p class="text-center text-lg text-teal-800">{person.role}</p>
					{#if person.bio}
						<div class="space-y-3 leading-relaxed text-gray-700">
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
