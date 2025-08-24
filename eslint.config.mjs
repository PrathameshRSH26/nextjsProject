import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Turn off React escaped entities rule
      "react/no-unescaped-entities": "off",

      // Allow using <img> instead of Next.js Image
      "@next/next/no-img-element": "off",

      // Allow `any` type in TypeScript
      "@typescript-eslint/no-explicit-any": "off",

      // Ignore unused vars if prefixed with _
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Don’t force const for useState/setState
      "prefer-const": "off",
    },
  },
];

export default eslintConfig;
