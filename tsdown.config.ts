import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
    // deflate: "./src/lib/deflate.js",
    // inflate: "./src/lib/inflate.js",
    // constants: "./src/lib/zlib/constants.ts",
  },
  dts: false,
  exports: true,
  outputOptions: { minifyInternalExports: false, strictExecutionOrder: false },
});
