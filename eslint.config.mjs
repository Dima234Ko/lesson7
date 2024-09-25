import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: ["src/map.js", "docs/main.js", "src/README.md"],
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
