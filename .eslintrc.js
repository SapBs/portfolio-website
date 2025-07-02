module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'never'],
        'max-len': ['error', { code: 120 }],
        '@typescript-eslint/no-explicit-any': 'warn',
        'jsdoc/require-jsdoc': 'off',
    },
}
