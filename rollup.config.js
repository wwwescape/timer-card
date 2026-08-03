import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/timer-card.js",
    format: "es",
    inlineDynamicImports: true,
  },
  plugins: [resolve(), typescript(), json(), terser()],
};
