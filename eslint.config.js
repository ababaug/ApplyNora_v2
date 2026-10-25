import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/design-assets/**",
      "**/.oxlintrc.json"
    ]
  },
  {
    files: ["apps/web/src/pages/**/*.tsx", "apps/web/src/components/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "no-undef": "off",
      "no-empty": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);
