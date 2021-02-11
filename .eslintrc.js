module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Viljum frekar named exports
    'import/prefer-default-export': 0,

    // Verðum að hafa extensions út af es modules
    'import/extensions': 0,

    // Skilgreinum að þetta sé rótin í verkefninu okkar, þar sem það er annað
    // package.json skjal í ./src
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],

    // Leyfum console.info, warn og error
    //'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },///////////////////////////// TEMP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  "comma-dangle": 0,
  "react/jsx-uses-vars": 1,
  "react/display-name": 1,
  "no-unused-vars": "warn",
  "no-console": 1,
  "no-unexpected-multiline": "warn",
  "import/no-dynamic-require": "warn"
};
