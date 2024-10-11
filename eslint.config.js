// eslint.config.js
import { ESLint } from 'eslint';

export default [
    {
        files: ["**/*.js"],
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
            // Add other rules as needed
        }
    }
];
