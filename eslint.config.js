import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    "parser": "babel-eslint",
    "extends": ["prettier", "eslint:recommended", "plugin:node/recommended"],
    "env": {
      "node": true,
      "jest/globals": true,
      "es6": true,
      "browser": true
    },
    "plugins": ["prettier", "jest"],
    "rules": {
      "no-process-exit": 0
    },
    "settings": {}
  },
  {
    // Note: there should be no other properties in this object
    ignores: ['**/node_modules/**',
      '.vscode/**',
      '.idea/**'],
  },
]);


