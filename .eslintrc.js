module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base', // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'eslint:recommended', // https://eslint.org/docs/rules/
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2020,
    useJSXTextNode: true,
    sourceType: 'module',
  },
  rules: {
    // eslint
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'prefer-rest-params': 'off',
    'no-async-promise-executor': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off',
    'no-spaced-func': 'off',
    'import/no-unresolved': 'off',
    'import/no-relative-packages': 'off',
    // 代码风格
    'vue/multi-word-component-names': 'off',
    'arrow-parens': 'off',
    'no-else-return': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'operator-linebreak': 'off',
    'import/order': 'off',
    'linebreak-style': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'generator-star-spacing': 'off',
    'max-len': ['error', { 'code': 130 }],
    // javascript
    'func-names': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'prefer-template': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-confusing-arrow': 'off',
    'no-new': 'off',
    'no-void': 'off',
    'prefer-rest-params': 'off',
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    // typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unsafe-call:': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    // vue - https://eslint.vuejs.org/rules/
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      }
    }]
  },
}
