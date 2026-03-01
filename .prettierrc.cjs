module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 80,
  tabWidth: 4,
  overrides: [
    {
      files: ['*.json'],
      options: {
        semi: true,
        tabWidth: 2,
      },

      files: ['*.tsx', '*.jsx'],
      options: {
        parser: 'typescript'
      }
    },
  ],
};
