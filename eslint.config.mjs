import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: ["docs/map.js", "dist/main.js"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        module: "writable",
      },
    },
    rules: {
      "no-console": "error",
    },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
];
