module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-tabs": 0,
    "react/prop-types": 0,
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
    "indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
};
