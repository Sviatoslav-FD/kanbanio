<script setup lang="ts">
import { ref, computed } from "vue";

const modalRef = ref(null);

const onAddNewTask = () => {
  //@ts-ignore
  modalRef.value.toggleModal();
};

const background = computed(() => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
});
</script>

<template>
  <div class="flex items-center justify-center h-full bg-greyLight">
    <div class="text-center">
      <p class="text-greyMedium">
        This board is empty. Create a new column to get started.
      </p>
      <AppButton class="mt-32" @click="onAddNewTask">
        Add New Column
      </AppButton>
    </div>
    <AppModal ref="modalRef">
      <template #title>Add new column</template>
      <div class="mt-24">
        <div class="w-4 h-4 bg-black rounded-full" :style="{ background }" />
      </div>
    </AppModal>
  </div>
</template>

<style scoped lang="scss"></style>
