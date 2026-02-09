<script lang="ts">
  import { HeartHandshake } from '@lucide/svelte';
  const PAYPAL_BUTTON_ID = 'SWTXK37VLTDTC';
</script>

<div class="w-full px-4">
  <form
    action="https://www.paypal.com/donate"
    method="post"
    target="_blank"
    class="w-full"
  >
    <input
      type="hidden"
      name="hosted_button_id"
      value={PAYPAL_BUTTON_ID}
    />
    <button
      type="submit"
      class="
        block w-full
        md:inline-flex md:w-auto
        items-center justify-center gap-2
        rounded-lg bg-teal-800
        px-4 py-2
        text-center text-xl text-gray-100
        transition-all duration-150
        hover:brightness-110 active:scale-95 cursor-pointer
      "
    >
      <HeartHandshake class="h-6 w-6 stroke-1" />
      <span>Donate</span>
    </button>
  </form>
</div>