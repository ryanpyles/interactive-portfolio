module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["react-app", "airbnb", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    },
  };
  