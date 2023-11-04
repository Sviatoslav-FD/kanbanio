<template>
  <div class="playground">
    <div class="playground__header">
      <Logo />
      <span class="playground__header--text">Design System</span>
    </div>

    <Colors />
    <Typography />
    <InteractiveElements />
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import Colors from "~/components/design-system/Colors.vue"
import Typography from "~/components/design-system/Typography.vue"
import InteractiveElements from "~/components/design-system/InteractiveElements.vue"
</script>

<style scoped lang="scss">
.playground {
  width: 100%;
  max-width: 1110px;
  margin: 70px auto;

  &__header {
    display: flex;
    
    &--text {
      flex-grow: 1;
      text-align: end;
      font-weight: 700;
    }
  }
}
</style>