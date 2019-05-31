'use strict'

module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'globals': {
    'HJSDK': true,
    'location': true
  },
  'extends': [
    'vue',
    'standard',
    'plugin:vue/recommended'
  ],
  'plugins': [
    'import',
    'vue'
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    }
  },
  'rules': {
    'no-underscore-dangle': 1,
    'prefer-destructuring': 0,
    'arrow-body-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'prefer-const': 0,
    'no-unused-expressions': [
      1, {
        'allowShortCircuit': true
      }
    ],

    'no-empty': [
      2, {
        'allowEmptyCatch': true
      }
    ],
    'camelcase': 0,
    'default-case': 0,
    'no-case-declarations': 0,
    'no-script-url': 0,
    'semi': 0,
    'eol-last': 0,
    'no-unused-vars': 1,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-unneeded-ternary': 1,
    'no-nested-ternary': 1,
    'max-len': ['error', {
      'code': 280
    }],
    'no-return-assign': 0,
    'dot-notation': 1,
    'no-param-reassign': 1,
    'func-names': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 20,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}