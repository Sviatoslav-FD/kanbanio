<script setup lang="ts">
import { ref, computed } from "vue";
//@ts-ignore
import { useSidebar } from "@/composables";
//@ts-ignore
import { uniqueId } from "@/helpers";
const { addNewBoard } = useSidebar();

const modalRef = ref(null);
const inputRef = ref(null);
const inputGroupRef = ref(null);
const newBoardName = ref("");
const columns = ref(null);

const disabled = computed<Boolean>(() => {
  return !(columns.value?.length && newBoardName.value.trim());
});

function toggleBoardCreateModal(): void {
  modalRef.value?.toggleModal();
}

function onAddBoard(): void {
  addNewBoard({
    id: uniqueId(),
    name: newBoardName.value,
    columns,
    active: false,
  });
  newBoardName.value = "";
  toggleBoardCreateModal();
}

defineExpose({ toggleBoardCreateModal });
</script>

<template>
  <AppModal ref="modalRef">
    <template #title>Add New Board</template>
    <AppInput
      ref="inputRef"
      title="Name"
      v-model="newBoardName"
      placeholder="Board name"
      mounted-focus
      class="my-24"
    />

    <AppInputGroup
      ref="inputGroupRef"
      title="Columns"
      @update:list="columns = $event"
    />

    <AppButton
      class="w-full mx-auto mt-32"
      :disabled="disabled"
      @click="onAddBoard"
    >
      Add New Board
    </AppButton>
  </AppModal>
</template>
