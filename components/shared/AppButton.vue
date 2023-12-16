<script setup lang="ts">
import { computed } from "vue";
//@ts-ignore
import { TButtonType, TButtonSize } from "@/types";

const { type, size, padding, disabled } = defineProps<{
  type?: TButtonType;
  size?: TButtonSize;
  padding?: string;
  disabled?: boolean;
}>();

const buttonColor = computed<string>(() => {
  if (type === "Secondary") {
    return "bg-[#635FC71A] text-purpleMain";
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

<template>
  <button
    class="button rounded-[24px] font-bold text-[15px] leading-[19px] cursor-pointer text-center"
    :class="[buttonColor, buttonSize]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    @apply bg-greyLight text-greyMedium cursor-not-allowed;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
