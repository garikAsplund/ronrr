<script lang="ts">
// import your images as URLs
import ballUrl from './ball.jpg?url';
import soberBowlUrl from './sober_bowl.jpg?url';
</script>

<svelte:head>
  <title>Meetings & Activities · River of No Return Recovery</title>
</svelte:head>

<main class="container mx-auto px-6 py-12">
  <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
    <img
      src={ballUrl}
      alt="Recovery bowling night"
      class="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
    />
    <img
      src={soberBowlUrl}
      alt="Sober social event"
      class="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
    />
  </div>
</main>