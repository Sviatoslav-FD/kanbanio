<script setup lang="ts">
import { ref, computed, nextTick, watchEffect } from "vue";
import { uniqueId } from "@/helpers";

interface AppColorPickerItem {
  id: string;
  text: string;
}

interface InputGroupProps {
  title: string;
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  title: "",
});

const list = ref<AppColorPickerItem[]>([{ id: uniqueId(), text: "" }]);

const hasEmptyItems = computed(() =>
  Boolean(list.value.filter((i) => !i.text).length)
);

const emit = defineEmits(["update:list"]);
watchEffect(() =>
  emit(
    "update:list",
    list.value.filter((i) => i.text)
  )
);

function onInputEnter(id: string): void {
  addNewColumn();

  nextTick(() => {
    const element: HTMLInputElement | null = document.querySelector(
      `#input-group-${id}`
    );
    const nextElInput = (
      element?.parentNode?.nextSibling as HTMLElement
    ).querySelector("input");
    nextElInput?.focus();
  });
}

function onRemoveItem(id: string): void {
  if (list.value.length > 1) {
    list.value = list.value.filter((i) => i.id !== id);
  }
}

function addNewColumn(): void {
  if (!hasEmptyItems.value) {
    list.value.push({ id: uniqueId(), text: "" });
  }
}
</script>

<template>
  <div>
    <p class="mb-1 text-12 text-greyMedium">{{ props.title }}</p>

    <div v-for="({ id, text }, index) in list" :key="id" class="flex items-center">
      <AppInput :model-value="text" :id="`input-group-${id}`" class="flex-1 mb-8" @keypress.enter="onInputEnter(id)"
        @update:model-value="(v) => (list[index].text = v)" />

      <AppColorPicker class="mx-8" />

      <NuxtIcon class="cursor-pointer icon" name="icon-cross" @click="onRemoveItem(id)" />
    </div>

    <AppButton class="w-full" type="Secondary" :disabled="hasEmptyItems" @click="addNewColumn">
      Add New Column
    </AppButton>
  </div>
</template>
