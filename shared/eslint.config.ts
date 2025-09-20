import {defineConfig, globalIgnores} from "eslint/config";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
    globalIgnores(
        [
            "node_modules/",
            "dist/",
            "build/",
            "coverage/",
            ".cache/",
            ".DS_Store",
            ".env",
            ".env.local"
        ],
        "shared: ignores"
    ),

    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        plugins: {"@typescript-eslint": tsPlugin},
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}],
            "@typescript-eslint/explicit-module-boundary-types": "off"
        }
    }
]);