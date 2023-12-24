<template>
  <div class="typography-item">
    <div class="typography-item__properties">
      <p class="typography-item__properties--item">{{ item.fontFamily }}</p>
      <p class="typography-item__properties--item font-weight">{{ item.fontWeight }}</p>
      <p class="typography-item__properties--item">{{ item.fontSize }}</p>
      <p class="typography-item__properties--item">{{ item.lineHeight }} Line</p>
      <p
        v-if="item.letterSpacing"
        class="typography-item__properties--item"
      >
        {{ item.letterSpacing }} Kerning
      </p>
    </div>

    <p
      class="typography-item__example"
      :style="{
        'fontFamily': item.fontFamily,
        'fontWeight': fontWeight,
        'fontSize': item.fontSize,
        'lineHeight': item.lineHeight,
        'letterSpacing': item.letterSpacing,
        'color': color
      }"
    >
      {{ item.example }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

import { ITypography } from "@/types/index"

const { item } = defineProps<{ item: ITypography }>()

const fontWeight = computed<number>(() => {
  if (item.fontWeight === 'Bold') return 700
  else return 500
})

const color = computed<string>(() => {
  if (item.letterSpacing) return '#828FA3'
  else return '#000112'
})
</script>

<style scoped lang="scss">
.typography-item {
  &__properties {
    display: flex;
    font-size: 13px;
    line-height: 23px;
    margin-bottom: 8px;
    color: var(--color-grey-medium);

    &--item {
      margin-right: 16px;

      &.font-weight {
        color: var(--color-black);
      }
    }
  }

  &__example {
    margin-bottom: 40px;
  }
}
</style>