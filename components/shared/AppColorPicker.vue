<script setup lang="ts">
import { ref, computed } from "vue";

const isPaletteVisible = ref(false);
const selectedColor = ref<string | null>(null);
const colorPalette = [
  ["Maroon", "#800000"],
  ["DarkRed", "#8B0000"],
  ["Fire Brick", "#B22222"],
  ["Red", "#FF0000"],
  ["Salmon", "#FA8072"],
  ["Tomato", "#FF6347"],
  ["Coral", "#FF7F50"],
  ["OrangeRed", "#FF4500"],
  ["Chocolate", "#D2691E"],
  ["Sandy Brown", "#F4A460"],
  ["Dark Orange", "#FF8C00"],
  ["Orange", "#FFA500"],
  ["DarkGoldenrod", "#B8860B"],
  ["Goldenrod", "#DAA520"],
  ["Gold", "#FFD700"],
  ["Olive", "#808000"],
  ["Yellow", "#FFFF00"],
  ["Yellow Green", "#9ACD32"],
  ["Green Yellow", "#ADFF2F"],
  ["Chartreuse", "#7FFF00"],
  ["Lawn Green", "#7CFC00"],
  ["Green", "#008000"],
  ["Lime", "#00FF00"],
  ["Lime Green", "#32CD32"],
  ["Spring Green", "#00FF7F"],
  ["Medium Spring Green", "#00FA9A"],
  ["Turquoise", "#40E0D0"],
  ["LightSeaGreen", "#20B2AA"],
  ["MediumTurquoise", "#48D1CC"],
  ["Dark Cyan", "#008B8B"],
  ["Aqua", "#00FFFF"],
  ["Dark Turquoise", "#00CED1"],
  ["Deep Sky Blue", "#00BFFF"],
  ["Dodger Blue", "#1E90FF"],
  ["Royal Blue", "#4169E1"],
  ["Navy", "#000080"],
  ["Dark Blue", "#00008B"],
  ["Medium Blue", "#0000CD"],
  ["Blue", "#0000FF"],
  ["Blue Violet", "#8A2BE2"],
  ["Dark Orchid", "#9932CC"],
  ["Dark Violet", "#9400D3"],
  ["Purple", "#800080"],
  ["Dark Magenta", "#8B008B"],
  ["Magenta", "#FF00FF"],
  ["Medium Violet Red", "#C71585"],
  ["Deep Pink", "#FF1493"],
  ["Hot Pink", "#FF69B4"],
  ["Crimson", "#DC143C"],
  ["Brown", "#A52A2A"],
  ["Indian Red", "#CD5C5C"],
  ["Rosy Brown", "#BC8F8F"],
  ["Light Coral", "#F08080"],
  ["Snow", "#FFFAFA"],
  ["Misty Rose", "#FFE4E1"],
  ["Dark Salmon", "#E9967A"],
  ["Light Salmon", "#FFA07A"],
  ["Sienna", "#A0522D"],
  ["Sea Shell", "#FFF5EE"],
  ["Saddle Brown", "#8B4513"],
  ["Peachpuff", "#FFDAB9"],
  ["Peru", "#CD853F"],
  ["Linen", "#FAF0E6"],
  ["Bisque", "#FFE4C4"],
  ["Burlywood", "#DEB887"],
  ["Tan", "#D2B48C"],
  ["Antique White", "#FAEBD7"],
  ["Navajo White", "#FFDEAD"],
  ["Blanched Almond", "#FFEBCD"],
  ["Papaya Whip", "#FFEFD5"],
  ["Moccasin", "#FFE4B5"],
  ["Wheat", "#F5DEB3"],
  ["Oldlace", "#FDF5E6"],
  ["FloralWhite", "#FFFAF0"],
  ["Cornsilk", "#FFF8DC"],
  ["Khaki", "#F0E68C"],
  ["Lemon Chiffon", "#FFFACD"],
  ["Pale Goldenrod", "#EEE8AA"],
  ["Dark Khaki", "#BDB76B"],
  ["Beige", "#F5F5DC"],
  ["Light Goldenrod Yellow", "#FAFAD2"],
  ["Light Yellow", "#FFFFE0"],
  ["Ivory", "#FFFFF0"],
  ["Olive Drab", "#6B8E23"],
  ["Dark Olive Green", "#556B2F"],
  ["Dark Sea Green", "#8FBC8F"],
  ["Dark Green", "#006400"],
  ["ForestGreen", "#228B22"],
  ["Light Green", "#90EE90"],
  ["PaleGreen", "#98FB98"],
  ["Honeydew", "#F0FFF0"],
  ["Sea Green", "#2E8B57"],
  ["Medium Sea Green", "#3CB371"],
  ["Mintcream", "#F5FFFA"],
  ["Medium Aquamarine", "#66CDAA"],
  ["Aquamarine", "#7FFFD4"],
  ["Dark Slate Gray", "#2F4F4F"],
  ["Pale Turquoise", "#AFEEEE"],
  ["Light Cyan", "#E0FFFF"],
  ["Azure", "#F0FFFF"],
  ["Cadet Blue", "#5F9EA0"],
  ["Powder Blue", "#B0E0E6"],
  ["Light Blue", "#ADD8E6"],
  ["Sky Blue", "#87CEEB"],
  ["Lightsky Blue", "#87CEFA"],
  ["Steel Blue", "#4682B4"],
  ["Alice Blue", "#F0F8FF"],
  ["Slate Gray", "#708090"],
  ["Light Slate Gray", "#778899"],
  ["Lightsteel Blue", "#B0C4DE"],
  ["Cornflower Blue", "#6495ED"],
  ["Lavender", "#E6E6FA"],
  ["Ghost White", "#F8F8FF"],
  ["Midnight Blue", "#191970"],
  ["Slate Blue", "#6A5ACD"],
  ["Dark Slate Blue", "#483D8B"],
  ["Medium Slate Blue", "#7B68EE"],
  ["Medium Purple", "#9370DB"],
  ["Indigo", "#4B0082"],
  ["Medium Orchid", "#BA55D3"],
  ["Plum", "#DDA0DD"],
  ["Violet", "#EE82EE"],
  ["Thistle", "#D8BFD8"],
  ["Orchid", "#DA70D6"],
  ["LavenderB lush", "#FFF0F5"],
  ["Pale Violet Red", "#DB7093"],
  ["Pink", "#FFC0CB"],
  ["LightPink", "#FFB6C1"],
  ["Black", "#000000"],
  ["DimGray", "#696969"],
  ["Gray", "#808080"],
  ["Dark Gray", "#A9A9A9"],
  ["Silver", "#C0C0C0"],
  ["Light Grey", "#D3D3D3"],
  ["Gainsboro", "#DCDCDC"],
  ["White Smoke", "#F5F5F5"],
  ["White", "#FFFFFF"],
];

const background = computed(() => {
  return (
    selectedColor.value ?? "#" + (((1 << 24) * Math.random()) | 0).toString(16)
  );
});

function togglePalette(): void {
  isPaletteVisible.value = !isPaletteVisible.value;
}

function selectColor(color: string): void {
  selectedColor.value = color;
  togglePalette();
}
</script>

<template>
  <div class="relative">
    <div
      class="w-4 h-4 border border-solid rounded-full shadow-inner cursor-pointer border-greyLight"
      :style="{ background }"
      @click="togglePalette"
    />
    <div
      v-if="isPaletteVisible"
      class="z-10 absolute p-1 bg-white border border-solid rounded shadow-inner top-5 border-greyLight -left-[137px] w-[290px] h-[290px] overflow-y-auto"
    >
      <div
        v-for="color in colorPalette"
        :key="color[1]"
        :style="{ backgroundColor: color[1] }"
        class="inline-block w-5 h-5 m-1 border border-solid rounded cursor-pointer border-greyMedium"
        @click="selectColor(color[1])"
      />
    </div>
  </div>
</template>
