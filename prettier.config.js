module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: false,
  endOfLine: "auto",
  printWidth: 120,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-lines-before-headings", "./dist/index.js"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  linesBeforeHeadings: 2
};
