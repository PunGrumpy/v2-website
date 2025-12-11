import nextTypescript from "eslint-config-next/typescript";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const config = [...nextTypescript, {
  ignores: [
    'node_modules/**',
    '.next/**',
    'dist/**',
    'build/**',
    'coverage/**',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
    'public/**',
    '*.d.ts',
    'components/ui/**/*.{js,jsx,ts,tsx}'
  ]
}, ...nextCoreWebVitals, ...compat.extends("prettier"), {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    tailwindcss: (await import('eslint-plugin-tailwindcss')).default,
    'simple-import-sort': (await import('eslint-plugin-simple-import-sort'))
      .default
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off'
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.js'
    }
  }
}, {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: (await import('@typescript-eslint/parser')).default
  }
}]

export default config
