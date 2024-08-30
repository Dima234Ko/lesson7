import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "error",
      // ignores: ["**/*.test.js", "!**/eslint.config.js"],
      // "plugins": ["jest"]
    },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
];
