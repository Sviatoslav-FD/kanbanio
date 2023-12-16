<script setup lang="ts">
import Logo from "@/components/Logo.vue";
//@ts-ignore
import { useSidebar } from "@/composables";
const { isSidebarVisible } = useSidebar();

const onAddNewTask = () => {
  console.log("Add New Task");
};
</script>

<template>
  <div class="header">
    <Logo class="header__logo" v-show="!isSidebarVisible" />

    <p class="header__text">Platform Launch</p>

    <AppButton @click="onAddNewTask"> Add New Task </AppButton>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex items-center min-h-[96px] pr-24 border-b border-solid border-linesLight;

  &__logo {
    @apply flex items-center w-[300px] h-[96px] pr-[36px] pl-24 border-r border-solid border-linesLight;
  }

  &__text {
    @apply flex-1 text-24 font-bold pl-[36px];
  }
}
</style>
