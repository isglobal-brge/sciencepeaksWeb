import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "docs/**",
      "context/**",
      "public/**",
      "node_modules/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { rules: { "@next/next/no-img-element": "off" } },
  // Preserve the existing legal copy; its quotation typography predates this redesign.
  {
    files: [
      "app/account-deletion/**",
      "app/cookies-policy/**",
      "app/privacy-policy/**",
    ],
    rules: { "react/no-unescaped-entities": "off" },
  },
];
