import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "type",
            "object",
            ["parent", "sibling", "index"],
            "unknown"
          ],
          pathGroups: [
            {
              pattern: "next",
              group: "builtin",
              position: "before"
            },
            {
              pattern: "react",
              group: "builtin",
              position: "before"
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "@/components/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "@/layouts/**",
              group: "internal",
              position: "before"
            },
            {
              pattern: "@/pages/**",
              group: "internal",
              position: "before"
            }
          ],
          pathGroupsExcludedImportTypes: ["object", "unknown"],
          'newlines-between': "always",
          alphabetize: {
            order: "desc"
          }
        }
      ],
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
});

const eslintConfig = [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "next/typescript"
  ),
];

export default eslintConfig;
