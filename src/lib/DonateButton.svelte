<script lang="ts">
	import { HeartHandshake } from '@lucide/svelte';
</script>

<div class="w-full px-4">
	<!-- side padding on mobile -->
	<a
		href="/"
		target="_blank"
		rel="noopener noreferrer"
		class="
 block w-full items-center justify-center
      gap-2 rounded-lg bg-teal-800
      px-4 py-2
      text-center text-xl text-gray-100 transition-all duration-150
      hover:brightness-110 active:scale-95
      md:inline-flex md:w-auto pointer-events-none
    "
		><div class="flex w-full justify-center items-center">
			<HeartHandshake class="h-6 w-6 stroke-1 mr-2" />
			Donate
		</div>
	</a>
</div>
