<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "@/components/shared/Button.vue";
import Modal from "@/components/shared/Modal.vue";

const isModalOpen = ref(false);

const onAddNewTask = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  console.log("closeModal", isModalOpen.value);
};

const background = computed(() => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
});
</script>

<template>
  <div class="flex items-center justify-center h-full bg-greyLight">
    <div>
      <p class="text-greyMedium">
        This board is empty. Create a new column to get started.
      </p>
      <Button class="mx-auto mt-32" @click="onAddNewTask">
        Add New Column
      </Button>
    </div>
    <Modal v-if="isModalOpen" @close="closeModal">
      <template #title>Add new column</template>
      <div class="mt-24">
        <div class="w-4 h-4 bg-black rounded-full" :style="{ background }" />
      </div>
    </Modal>
  </div>
</template>

<style scoped lang="scss"></style>
