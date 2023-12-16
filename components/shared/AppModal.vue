<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["close"]);
const isModalOpen = ref(false);

function toggleModal(): void {
  isModalOpen.value = !isModalOpen.value;
}

defineExpose({
  isModalOpen,
  toggleModal,
});
</script>

<template>
  <div
    v-if="isModalOpen"
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click.self="toggleModal"
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
