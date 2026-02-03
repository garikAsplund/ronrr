<script lang="ts">
	import { Phone, Mail, MapPin, Clock, FileCheck } from '@lucide/svelte';
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<!-- Hero Section -->
	<!-- <div class="mb-8 sm:mb-12">
		<enhanced:img
			src="/static/images/backgrounds/contact.jpg"
			alt="Wallowa Land Trust Office"
			class="h-24 w-full object-cover sm:h-64"
		/>
	</div>

	<h1 class="mb-8 font-serif text-3xl text-slate-800 sm:mb-12 sm:text-4xl dark:text-slate-100">
		Contact Us
	</h1> -->

	<div class="grid gap-8">
		

		<!-- Map Section -->
		<div class="space-y-6 rounded-lg  p-6 sm:p-8 dark:bg-slate-800/50">
			<h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">River of No Return Recovery Center</h2>

			<!-- Map Embed -->
			<div class="aspect-square w-full overflow-hidden rounded-lg">
				<iframe
					title="River of No Return Recovery Center Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7830.023798537735!2d-113.8899167!3d45.17381779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535835b8465b43c7%3A0x50c0f9cb162da6f5!2s909%20Main%20St%2C%20Salmon%2C%20ID%2083467!5e1!3m2!1sen!2sus!4v1770088562311!5m2!1sen!2sus"
					width="100%"
					height="100%"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div class="space-y-4">
				<h3 class="font-serif text-xl text-slate-800 dark:text-slate-100">Come find us</h3>
				<p class="text-slate-700 dark:text-slate-300">
					We are located in downtown Salmon, Idaho. Free street parking is available.
				</p>
			</div>
		</div>
	</div>
</div>
