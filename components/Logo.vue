<template>
  <NuxtIcon class="logo" :name="`logo-${mode || 'light'}`" filled />
</template>

<script setup lang="ts">
const { mode } = defineProps<{ mode?: "light" | "dark" }>();
</script>

<style scoped lang="scss">
.logo {
  :deep(svg) {
    width: unset;
    height: unset;
  }
}
</style>
