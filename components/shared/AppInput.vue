<script setup lang="ts">
import { ref, onMounted } from "vue";

interface InputProps {
  modelValue: any;
  type?: string;
  title?: string;
  disabled?: boolean;
  placeholder?: string;
  mountedFocus?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  title: "",
  disabled: false,
  placeholder: "Type something...",
  mountedFocus: false,
});

const inputRef = ref(null);

function focus(): void {
  inputRef.value?.focus();
}

onMounted(() => {
  props.mountedFocus && focus();
});
</script>

<template>
  <div>
    <p class="mb-1 text-12 text-greyMedium">{{ title }}</p>
    <input
      ref="inputRef"
      :value="props.modelValue"
      :type="props.type"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      class="border rounded-[4px] input px-16 py-8 w-full"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  border-color: rgba(130, 143, 163, 0.25);
  caret-color: #635fc7;

  &::placeholder {
    color: rgba(130, 143, 163, 0.25);
  }
}
</style>
