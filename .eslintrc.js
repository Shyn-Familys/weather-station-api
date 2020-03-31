module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            modules: true
        }
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/indent": ["error", 4, {
            "SwitchCase": 1,
            "CallExpression": {"arguments": "first"},
            "FunctionExpression": {"parameters": "first"},
            "FunctionDeclaration": {"parameters": "first"}
        }],
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true
                }
            }
        ]
    }
};
