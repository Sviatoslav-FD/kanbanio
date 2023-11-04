module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["no-relative-import-paths"],
  rules: {
    "no-undef": "off",
    eqeqeq: "warn",
    "vue/multi-word-component-names": 0,
    "vue/no-multiple-template-root": 0,
    "vue/require-explicit-emits": 0, // this conflict with vue3.3 TS defineEmits<{ name: []}>()
    "prettier/prettier": 1,
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { rootDir: "src", prefix: "@" },
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/no-v-html": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
};
