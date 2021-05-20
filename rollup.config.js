import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx"];

export default {
  input: "./src/index.jsx",
  output: {
    file: "./lib/index.js",
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "named",
  },
  external: ["react", "react-dom", /@babel\/runtime/],
  plugins: [
    peerDepsExternal(),
    json(),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
