<template>
  <label
    tabindex="1"
    :class="['check', bgColor]"
    @keypress="toggle"
    @click.stop.prevent="toggle"
  >
    <input type="checkbox" class="check__input" />
    <Transition v-if="isLight" name="light-slide-fade">
      <NuxtIcon name="icon-light-theme" class="check__circle" />
    </Transition>
    <Transition v-else name="dark-slide-fade">
      <NuxtIcon name="icon-dark-theme" class="check__circle dark" />
    </Transition>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLight = ref<boolean>(true);
const bgColor = ref<string>("bg-purpleMain");

function toggle(): void {
  isLight.value = !isLight.value;
  bgColor.value = isLight.value ? "bg-purpleMain" : "bg-white";
}
</script>

<style scoped lang="scss">
.check {
  @apply mx-auto block relative rounded-[12px] w-[50px] cursor-pointer border border-solid border-purpleMain;

  &__input {
    @apply invisible;
  }

  &__circle {
    @apply absolute top-[4px] left-[5px] w-[13px] h-[13px] text-white;

    &.dark {
      @apply left-[27px] text-purpleMain;
    }
  }
}

.light-slide-fade-enter-active,
.dark-slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.light-slide-fade-leave-active,
.dark-slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.light-slide-fade-enter-from,
.light-slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.dark-slide-fade-enter-from,
.dark-slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
