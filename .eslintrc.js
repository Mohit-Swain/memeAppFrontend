/* global module */

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "globals":{

    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
