// eslint.config.js
const ESLint = require('eslint');

module.exports = [
    {
        files: ["**/*.js"],
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
            // Add other rules as needed
        }
    }
];
