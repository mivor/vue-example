// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // add your custom rules here
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    'no-console': 0
  }
}
