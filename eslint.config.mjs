import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser },
  rules: {
    "no-console" : "error", 
    // "plugins": ["jest"]
  }
},
  pluginJs.configs.recommended,
];