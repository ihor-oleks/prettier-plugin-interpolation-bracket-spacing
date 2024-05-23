import {type Parser, type ParserOptions, type Plugin, format, Printer, AstPath, Doc} from "prettier";
import {parsers as angularParsers} from "prettier/plugins/angular";

const getPlugins = (language: string, options: ParserOptions): Plugin[] => {
  const plugins = options.plugins.filter((plugin) => typeof plugin !== "string") as Plugin[];
  return plugins.filter((plugin) => plugin.languages?.some((lang) => lang.name === language));
};

export const printers: {[astFormat: string]: Printer} = {
  "interpolation-bracket-spacing-ast": {
    print: (path: AstPath): Doc => {
      if (path.node?.type === "interpolation-bracket-spacing") {
        return path.node.body;
      }
      throw new Error(`Unknown node type: ${path.node?.type}`);
    }
  }
};

export const parsers: {[parserName: string]: Parser} = {
  angular: {
    ...angularParsers.__ng_interpolation,
    parse: async (text: string, options: ParserOptions) => {
      const content = await format(text, {...options, plugins: getPlugins("angular", options), endOfLine: "lf"});
      const body = options.bracketSpacing ? content : content.replaceAll("{{ ", "{{").replaceAll(" }}", "}}");
      return {
        type: "interpolation-bracket-spacing",
        body
      };
    },
    astFormat: "interpolation-bracket-spacing-ast"
  }
};
