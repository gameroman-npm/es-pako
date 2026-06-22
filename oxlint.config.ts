import { defineConfig } from "@gameroman/config/oxlint/ts";

export default defineConfig({
  options: {
    typeCheck: false,
  },
  rules: {
    "no-unnecessary-condition": "warn",
    "prefer-const": "warn",
  },
});
