<template>
  <div class="button" :class="[buttonColor, buttonSize]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
//@ts-ignore
import { TButtonType, TButtonSize } from "@/types";

const { type, size, padding } = defineProps<{
  type?: TButtonType;
  size?: TButtonSize;
  padding?: string;
}>();

const buttonColor = computed<string>(() => {
  if (type === "Secondary") {
    return "bg-[#635FC71A]";
  } else if (type === "Destructive") {
    return "bg-red text-white";
  } else {
    return "bg-purpleMain text-white";
  }
});

const buttonSize = computed<string>(() => {
  if (padding) return `p-[${padding}]`;
  else if (size === "S") return "py-[10px] px-[50px]";
  else return "py-[15px] px-[60px]";
});
</script>

<style scoped lang="scss">
.button {
  @apply w-fit rounded-[24px] font-bold text-[15px] leading-[19px] cursor-pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
