<template>
  <div>
    <h4>{{ title }}</h4>

    <label
      v-for="item in items"
      :key="item.id"
      class="checkbox"
    >
      <input
        type="checkbox"
        class="checkbox__input"
        :checked="item.value"
        :value="item.id"
        @input="onInput"
      >
  
      <span :class="{ checked: item.value }">{{ item.text }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { ICheckbox } from '@/types'
// import { capitalized } from '@/helpers'

const emit = defineEmits(['update:items'])

const { title, items } = defineProps<{
  title: string,
  items: ICheckbox[]
}>()

const onInput = ({ target }: any) => {
  const newItems = items.map((item: ICheckbox): ICheckbox => {
    if (item.id === Number(target.value)) item.value = !item.value

    return item
  })
  
  emit('update:items', newItems)
}
</script>

<style scoped lang="scss">
h4 {
  color: #828FA3;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
}

.checkbox {
  display: block;
  background-color: #F4F7FD;
  border-radius: 4px;
  padding: 12px;
  font-weight: 700;
  margin-bottom: 8px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(99, 95, 199, .25);
    cursor: pointer;
  }

  &__input {
    margin-right: 16px;
  }

  .checked {
    text-decoration-line: line-through;
    opacity: .5;
  }
}
</style>