"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_1 = __importDefault(require("@eslint/js"));
var globals_1 = __importDefault(require("globals"));
var typescript_eslint_1 = __importDefault(require("typescript-eslint"));
var config_1 = require("eslint/config");
exports.default = (0, config_1.defineConfig)(__spreadArray(__spreadArray([
    // Global ignores
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            'coverage/',
            '.cache/',
            '.DS_Store',
            '.env',
            '.env.local',
        ],
    },
    // Base JS config
    js_1.default.configs.recommended
], typescript_eslint_1.default.configs.recommended, true), [
    // Custom overrides
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            globals: globals_1.default.node,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },
], false));
