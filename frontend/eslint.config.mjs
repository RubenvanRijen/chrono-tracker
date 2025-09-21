import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import storybook from "eslint-plugin-storybook";
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = tseslint.config(
    // Apply Mantine config first
    ...mantine,

    // Then add Next.js configs
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

    // Add Storybook config
    ...storybook.configs["flat/recommended"],

    // Custom ignores
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
            "**/*.{mjs,cjs,js,d.ts,d.mts}"
        ],
    }
);

export default eslintConfig;
