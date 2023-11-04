// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
export default defineNuxtConfig({
  modules: ["nuxt-icons"],
  css: ["@/assets/style/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
