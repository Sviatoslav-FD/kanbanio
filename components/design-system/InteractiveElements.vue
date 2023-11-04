<template>
  <DesingSystemWrapper class="interactive" number="03" title="Interactive Elements">
    <p class="interactive__title">Light Version</p>

    <div class="interactive__buttons">
      <Button>
        Button Primary (L)
      </Button>

      <Button type="PrimaryS" size="S">
        Button Primary (S)
      </Button>

      <Button type="Secondary" size="S">
        Button Secondary
      </Button>

      <Button type="Destructive" size="S">
        Button Destructive
      </Button>
    </div>

    <div class="interactive__inputs">
      <div class="interactive__inputs--checkbox">
        <Checkbox
          title="Subtask Checkbox"
          :items="subtasks"
          @update:items="subtasks = $event"
        />
      </div>

      <div class="interactive__inputs--checkbox">
      </div>
    </div>
  </DesingSystemWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ICheckbox } from '@/types'

import DesingSystemWrapper from "@/components/design-system/DesignSystemWrapper.vue"
import Button from "@/components/shared/Button.vue"
import Checkbox from "@/components/shared/Checkbox.vue"

const subtasks = ref<ICheckbox[]>([{
  id: 0,
  text: 'Idle',
  value: false
}, {
  id: 1,
  text: 'Completed',
  value: true
}])
</script>

<style scoped lang="scss">
.interactive {
  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    color: var(--color-grey-medium);
    padding-top: 40px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 56px 0;

    &--item {
      font-size: 13px;
      line-height: 23px;
      color: var(--color-grey-medium);
      text-align: center;

      & p {
        padding-top: 8px;
      }

      &-idle {
        padding-bottom: 33px;
      }
    }
  }
}
</style>