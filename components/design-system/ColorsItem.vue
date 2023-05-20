<template>
  <div class="color-item">
    <div class="color-item__hex" :style="{ color: textColor, background: color.HEX, border }">
      {{ color.HEX }}
    </div>

    <div class="color-item__rgb">
      <span class="color-item__rgb--title">RGB</span>
      {{ color.RGB }}
    </div>

    <div class="color-item__hsl">
      <span class="color-item__hsl--title">HSL</span>
      {{ color.HSL }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { IColor } from "@/types/index"

const { color } = defineProps<{ color: IColor }>()

const border = computed<string>(() => {
  if (color.HEX === '#FFFFFF') return '1px solid #E4EBFA'
  else return 'unset'
})

const textColor = computed<string>(() => {
  if (color.textColorInverted) return '#2B2C37'
  else return '#FFFFFF'
})
</script>

<style scoped lang="scss">
.color-item {
  &__hex {
    color: #FFF;
    font-weight: 700;
    padding: 45px 168px 16px 16px;
    border-radius: 6px;
  }

  &__rgb, &__hsl {
    margin-top: 16px;

    &--title {
      color: #828FA3;
      margin-right: 36px;
    }
  }
}

</style>