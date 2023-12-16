<script setup lang="ts">
import { ref, computed, nextTick } from "vue";

interface AppColorPickerItem {
  id: number;
  text: string;
}

interface InputGroupProps {
  title: string;
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  title: "",
});

const list = ref<AppColorPickerItem[]>([{ id: 1, text: "Todo" }]);

const hasEmptyItems = computed(() =>
  Boolean(list.value.filter((i) => !i.text).length)
);

function onInputEnter(text: string): void {
  if (list.value.length < 2 && text.trim()) {
    list.value.push({ id: list.value.length + 1, text: "" });

    nextTick(() => {
      const nextInputElement: HTMLInputElement = document.querySelector(
        `#input-group-${list.value.length} input`
      );
      nextInputElement.focus();
    });
  }
}

function onRemoveItem(id: number): void {
  if (list.value.length > 1) {
    list.value = list.value.filter((i) => i.id !== id);
  }
}

function onAddColumn(): void {
  if (!hasEmptyItems.value) {
    list.value.push({ id: list.value.length + 1, text: "" });
  }
}
</script>

<template>
  <div>
    <p class="mb-1 text-12 text-greyMedium">{{ props.title }}</p>

    <div v-for="{ id, text } in list" :key="id" class="flex items-center">
      <AppInput
        :model-value="text"
        :id="`input-group-${id}`"
        class="flex-1 mb-8"
        @keypress.enter="onInputEnter(text)"
      />

      <AppColorPicker class="mx-8" />

      <NuxtIcon
        class="cursor-pointer icon"
        name="icon-cross"
        @click="onRemoveItem(id)"
      />
    </div>

    <AppButton
      type="Secondary"
      class="w-full"
      @click="onAddColumn"
      :disabled="hasEmptyItems"
    >
      Add New Column
    </AppButton>
  </div>
</template>
