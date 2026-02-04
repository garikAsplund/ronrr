<script>
	import Watermark from './Watermark.svelte';
</script>

<footer class="relative bottom-0 mt-auto flex w-full flex-col justify-center py-8">
	<div class="flex w-full flex-col items-center justify-center space-x-4 py-8 text-gray-600">
		<a
			href="https://maps.app.goo.gl/jU1vu6yTPqebjzok7"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center space-x-2 text-lg">909 Main St., Salmon, ID 83467</a
		>
		<p class="text-lg select-all">hello@riverofnoreturnrecovery.org</p>

		<p>EIN: <span class="select-all">33-4597951</span></p>
	</div>

	<Watermark />
</footer>
