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
  app: {
    head: {
      charset: "utf-8",
      title: "Kanbanio",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  components: {
    global: true,
    dirs: ["~/components/shared"],
  },
});
