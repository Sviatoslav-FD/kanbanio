<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click.self="emit('close')"
  >
    <div class="max-w-full p-32 bg-white rounded-md w-96">
      <div class="text-[18px] font-bold">
        <slot name="title" />
      </div>
      <div>
        <slot name="text" />
      </div>
      <slot />
    </div>
  </div>
</template>
