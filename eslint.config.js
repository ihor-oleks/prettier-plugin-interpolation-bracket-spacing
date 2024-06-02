const eslintJs = require("@eslint/js");
const eslintTs = require("typescript-eslint");
const globals = require("globals");

module.exports = [
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    }
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": 1,
      "@typescript-eslint/no-var-requires": 0
    }
  }
];
