module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 以下為新增的 要忽略的rules
    'no-use-before-define': ['error', { functions: false }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'max-len': ["error", { "ignoreStrings": true,"ignoreTemplateLiterals": true }]    
  },
};
