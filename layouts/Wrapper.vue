<template>
  <div class="wrapper">
    <Transition name="slide">      
      <Sidebar v-if="isSidebarVisible" />
    </Transition>

    <div class="wrapper__main">
      <Header />
      <slot />
    </div>

    <Button
      v-show="!isSidebarVisible"
      class="wrapper__button-sidebar"
      padding="16px 20px"
      @click="onToggleSidebar"
    >
      <NuxtIcon name="icon-show-sidebar" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Button from "@/components/shared/Button.vue"

import { useSidebar } from '@/composables'
const { isSidebarVisible, onToggleSidebar } = useSidebar()

</script>

<style scoped lang="scss">
.wrapper {
  @apply flex relative h-[100vh];

  &__main {
    @apply flex-1;
  }

  &__button-sidebar {
    @apply absolute left-0 bottom-full rounded-tl-none rounded-bl-none;
  }
}
</style>