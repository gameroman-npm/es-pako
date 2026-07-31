import { defineConfig } from "@gameroman/config/oxlint/ts";

export default defineConfig({
  options: {
    typeCheck: false,
  },
  rules: {
    "prefer-const": "warn",
  },
});
