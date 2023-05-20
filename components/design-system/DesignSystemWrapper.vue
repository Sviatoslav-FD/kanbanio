<template>
  <div class="desing-system-wrapper">
    <div class="desing-system-wrapper__header">
      <span class="desing-system-wrapper__header--number">{{ number }}</span>
      <span>{{ title }}</span>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
const { number, title } = defineProps<{ number: string, title: string }>()
</script>

<style scoped lang="scss">
.desing-system-wrapper {
  &__header {
    margin: 90px 0 40px 0;
    font-weight: 700;

    &--number {
      margin-right: 16px;
      color: #635FC7;
    }
  }
}
</style>