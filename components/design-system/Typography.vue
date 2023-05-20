<template>
  <DesingSystemWrapper class="typography" number="02" title="Typography">
    <div class="typography__list">
      <div>
        <TypographyItem v-for="item in typographyBold" :key="item.example" :item="item" />
      </div>
      <div>
        <TypographyItem v-for="item in typographyMedium" :key="item.example" :item="item" />
      </div>
    </div>
  </DesingSystemWrapper>
</template>

<script setup lang="ts">
import DesingSystemWrapper from "~/components/design-system/DesignSystemWrapper.vue"
import TypographyItem from "~/components/design-system/TypographyItem.vue"

import { ITypography } from "~/types/index"

const typographyBold: ITypography[] = [{
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Bold",
  fontSize: "24px",
  lineHeight: "30px",
  example: "Heading (XL)"
}, {
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Bold",
  fontSize: "18px",
  lineHeight: "23px",
  example: "Heading (L)"
}, {
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Bold",
  fontSize: "15px",
  lineHeight: "19px",
  example: "Heading (M)"
}, {
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Bold",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "2.4px",
  example: "Heading (S)"
}]

const typographyMedium: ITypography[] = [{
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Medium",
  fontSize: "13px",
  lineHeight: "23px",
  example: "Body (L) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est."
}, {
  fontFamily: "Plus Jakarta Sans",
  fontWeight: "Bold",
  fontSize: "12px",
  lineHeight: "15px",
  example: "Body (M) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est."
}]
</script>

<style scoped lang="scss">
.typography {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>