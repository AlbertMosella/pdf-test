module.exports = {
  "*.tsx": [
    "prettier --config node_modules/@uxland/project-tools/lint/.prettierrc.js --ignore-path ./.prettierignore --write",
  ],
};
