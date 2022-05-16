/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended"],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3, // 属性超过3个自动换行
        },
        multiline: {
          max: 1, // 换行后 同一行不能超过1个
        },
      },
    ],
  },
};
