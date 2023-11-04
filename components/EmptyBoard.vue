<script setup lang="ts">
import Button from "@/components/shared/Button.vue";

const onAddNewTask = () => {
  console.log("Add New Task");
};
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
  </div>
</template>

<style scoped lang="scss"></style>
