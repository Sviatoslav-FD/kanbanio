<script setup lang="ts">
import { computed } from "vue";

const background = computed(() => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
});
</script>

<template>
  <div
    class="w-4 h-4 border border-solid rounded-full shadow-inner border-greyLight"
    :style="{ background }"
  />
</template>
