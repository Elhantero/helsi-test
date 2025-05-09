import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    ignores: ['dist'], // Игнорируем папку dist
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Добавляем глобальные переменные для браузера
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Рекомендованные правила JS
      ...reactHooks.configs.recommended.rules, // Рекомендованные правила для React Hooks
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn', { allowConstantExport: true }
      ],
      'indent': ['error', 2], // Отступы в 2 пробела
      'quotes': ['error', 'single'], // Использование одинарных кавычек
      'semi': ['error', 'always'], // Обязательная точка с запятой
    },
  },
]);
