module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
  'indent': ['error', 2],
  'linebreak-style': ['error', 'unix'],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'no-console': ['warn'],
  'no-unused-vars': ['warn'],
  'vue/max-attributes-per-line': 'off',
  'vue/singleline-html-element-content-newline': 'off'
  }
}
