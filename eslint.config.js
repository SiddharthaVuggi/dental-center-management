import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist",
    "build",
    "coverage",
    "node_modules",
    "*.min.js",
  ]),

  {
    files: ["**/*.{js,jsx}"],

    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      importPlugin.flatConfigs.recommended,
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /* =====================
         JavaScript Rules
      ====================== */

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],

      /* =====================
         Variables
      ====================== */

      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^[A-Z_]",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      /* =====================
         React
      ====================== */

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/self-closing-comp": "error",
      "react/jsx-no-useless-fragment": "warn",

      /* =====================
         React Hooks
      ====================== */

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* =====================
         React Refresh
      ====================== */

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],

      /* =====================
         Imports
      ====================== */

      "import/no-duplicates": "error",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      /* =====================
         Accessibility
      ====================== */

      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },
]);
