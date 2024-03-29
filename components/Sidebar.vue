<script setup lang="ts">
import { ref, onMounted } from "vue";

//@ts-ignore
import Logo from "@/components/Logo.vue";
//@ts-ignore
import AddBoardModal from "@/components/modals/AddBoardModal.vue";
//@ts-ignore
import { useSidebar } from "@/composables";
const { boards, onToggleSidebar, onRouteChange, onMenuItemClick } =
  useSidebar();

onMounted(() => {
  onRouteChange();
});

const theme = false;
const addBoardModalRef = ref(null);

function toggleBoardCreateModal(): void {
  //@ts-ignore
  addBoardModalRef.value?.toggleBoardCreateModal();
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <Logo class="sidebar__header--logo" />
    </div>

    <h5>{{ `ALL BOARDS (${boards?.length})` }}</h5>

    <div class="sidebar__boards">
      <div
        v-for="item in boards"
        :key="item.id"
        tabindex="1"
        class="sidebar__boards--item"
        :class="{ active: item.active }"
        @click="onMenuItemClick(item.id)"
      >
        <NuxtIcon class="icon" name="icon-board" />
        <p class="name">{{ item.name }}</p>
      </div>

      <div
        tabindex="1"
        class="sidebar__boards--item new"
        @click="toggleBoardCreateModal"
      >
        <NuxtIcon class="icon" name="icon-board" />
        <p class="name">Add New Board</p>
      </div>
    </div>

    <div class="sidebar__footer">
      <div class="sidebar__footer--theme">
        <AppCheck v-model="theme" />
      </div>

      <button class="sidebar__footer--button-hide" @click="onToggleSidebar">
        <NuxtIcon name="icon-hide-sidebar" />
        <span class="sidebar__footer--button-hide text">Hide Sidebar</span>
      </button>
    </div>

    <AddBoardModal ref="addBoardModalRef" />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  @apply flex flex-col relative w-[300px] max-w-[100%] border-r border-solid border-linesLight bg-white px-24 pb-24;

  &__header {
    @apply flex items-center min-h-[96px];
  }

  h5 {
    @apply text-greyMedium text-12 font-bold mt-16 mb-24 tracking-[2.4px];
  }

  &__boards {
    &--item {
      @apply flex items-center text-16 font-bold px-16 py-24 -ml-24 cursor-pointer;

      &.active {
        @apply bg-purpleMain text-white rounded-br-full rounded-tr-full;
      }

      &.new {
        @apply text-purpleMain hover:bg-greyLight rounded-br-full rounded-tr-full;
      }

      .icon {
        @apply mr-16;
      }
    }
  }

  &__footer {
    @apply flex flex-1 flex-col justify-end items-start;

    &--theme {
      @apply w-full p-16 mb-24 rounded-[6px] bg-greyLight;
    }

    &--button-hide {
      @apply mx-auto flex items-center border-spacing-0 bg-white font-bold text-16 text-greyMedium cursor-pointer;

      &.text {
        @apply ml-8;
      }
    }
  }
}
</style>
