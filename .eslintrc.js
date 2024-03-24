/* eslint-env node */

const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = ['eslint-rules'];

module.exports = exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "flowtype",
        "react",
        "react-hooks",
        "@typescript-eslint",
        "rulesdir",
        "prettier"
    ],
    "rules": {
        // ------------------
        // TODO: Remove all of these configuration lowering the prioriy
        "no-var": "warn", // This should be removed once we have them fixed
        "prefer-const": "warn", // This should be removed once we have them fixed
        "no-mixed-spaces-and-tabs": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/ban-ts-comment": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/ban-types": "warn", // This should be removed once we have them fixed
        "react/no-unescaped-entities": "warn", // This should be removed once we have them fixed
        "react/no-children-prop": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/no-inferrable-types": "warn", // This should be removed once we have them fixed
        "react/jsx-key": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn", // This should be removed once we have them fixed
        "react/jsx-no-target-blank": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/no-unused-vars": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/explicit-module-boundary-types": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/no-explicit-any": "warn", // This should be removed once we have them fixed
        "@typescript-eslint/no-non-null-assertion": "warn", // This should be removed once we have them fixed
        '@typescript-eslint/no-var-requires': 0, // ESLint: Require statement not part of import statement.(@typescript-eslint/no-var-requires)
        // ------------------
        "react/prop-types": "error",
        "prettier/prettier": "off",
        "curly": "error",
        "rulesdir/require-await-function": [
            "error",
            {

                "functions": ["setRecoil", "getRecoil", "resetRecoil"]
            }
        ],

        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": [
            "warn", // This should be set to error once we have them fixed
            {
                "additionalHooks": "(useRecoilCallback|useRecoilTransaction_UNSTABLE)"
            }
        ]
    }
}
