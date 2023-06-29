<template>
  <div class="button" :style="[buttonColor, buttonSize]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TButtonType, TButtonSize } from "@/types/index"

const { type, size } = defineProps<{ type?: TButtonType, size?: TButtonSize }>()

const buttonColor = computed<string>(() => {
  if (type === 'Secondary') return 'background-color: #635FC71A; color: #635FC7'
  if (type === 'Destructive') return 'background-color: #EA5555; color: #FFFFFF'
  else return 'background-color: #635FC7; color: #FFFFFF'
})

const buttonSize = computed<string>(() => {
  if (size === 'S') return 'padding: 10px 50px;'
  else return 'padding: 15px 60px;'
})
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  background-color: #635FC7;
  color: #fff;
  border-radius: 24px;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>