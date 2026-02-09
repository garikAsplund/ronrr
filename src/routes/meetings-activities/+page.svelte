<script lang="ts">
	// import your images as URLs
	import ballUrl from './ball.jpg?url';
	import soberBowlUrl from './sober_bowl.jpg?url';
</script>

<svelte:head>
	<title>Meetings & Activities · River of No Return Recovery Center</title>
</svelte:head>

<section class="container mx-auto px-6 py-12">
	<div class="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
		<!-- <enhanced:img
			src={soberBowlUrl}
			alt="Sober social event"
			class="w-full rounded-lg object-cover shadow-lg md:w-1/2"
		/> -->
		<enhanced:img
			src={ballUrl}
			alt="Recovery bowling night"
			class="w-full rounded-lg object-cover shadow-lg md:w-1/2"
		/>
	</div>
</section>
