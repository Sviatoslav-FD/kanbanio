<template>
  <DesingSystemWrapper class="colors" number="01" title="Colors">
    <div class="colors__list">
      <ColorsItem v-for="item in Colors" :key="item.HEX" :color="item" />
    </div>
  </DesingSystemWrapper>
</template>

<script setup lang="ts">
import DesingSystemWrapper from "~/components/design-system/DesignSystemWrapper.vue"
import ColorsItem from "~/components/design-system/ColorsItem.vue"

import { IColor } from "@/types/index"

const Colors: IColor[] = [
  { HEX: '#635FC7', RGB: '99,95,199', HSL: '242°, 48%, 58%', textColorInverted: false },
  { HEX: '#A8A4FF', RGB: '168, 164, 255', HSL: '243°, 100%, 82%', textColorInverted: false },
  { HEX: '#000112', RGB: '0, 1, 18', HSL: '237°, 100%, 4%', textColorInverted: false },
  { HEX: '#20212C', RGB: '32, 33, 44', HSL: '235°, 16%, 15%', textColorInverted: false },
  { HEX: '#2B2C37', RGB: '43, 44, 55', HSL: '235°, 12%, 19%', textColorInverted: false },
  { HEX: '#3E3F4E', RGB: '62, 63, 78', HSL: '236°, 11%, 27%', textColorInverted: false },
  { HEX: '#828FA3', RGB: '130, 143, 163', HSL: '216°, 15%, 57%', textColorInverted: false },
  { HEX: '#E4EBFA', RGB: '228, 235, 250', HSL: '221°, 69%, 94%', textColorInverted: true },
  { HEX: '#F4F7FD', RGB: '244, 247, 253', HSL: '220°, 69%, 97%', textColorInverted: true },
  { HEX: '#FFFFFF', RGB: '255, 255, 255', HSL: '0°, 0%, 100%', textColorInverted: true },
  { HEX: '#EA5555', RGB: '234, 85, 85', HSL: '0°, 78%, 63%', textColorInverted: false },
  { HEX: '#FF9898', RGB: '255, 152, 152', HSL: '0°, 100%, 80%', textColorInverted: false }
]
</script>

<style scoped lang="scss">
.colors {
  &__header {
    margin: 90px 0 40px 0;
    font-weight: 700;

    &--number {
      margin-right: 16px;
      color: #635FC7;
    }
  }
  
  
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 30px;
  }
}
</style>