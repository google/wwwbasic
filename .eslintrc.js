// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2016
  },
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-scoped-var': 'off',
    'block-spacing': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'callback-return': 'error',
    'camelcase': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': 'off',
    'comma-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'complexity': 'off',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'error',
    'consistent-this': 'error',
    'curly': 'off',
    'default-case': 'off',
    'dot-location': 'error',
    'dot-notation': [
      'error',
      {
        'allowKeywords': false
      }
    ],
    'eol-last': 'error',
    'eqeqeq': 'off',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': [
      'error',
      'declaration'
    ],
    'function-paren-newline': 'off',
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'off',
    'handle-callback-err': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2],
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'error',
    'lines-around-directive': 'error',
    'lines-between-class-members': 'error',
    'max-classes-per-file': 'error',
    'max-depth': 'off',
    'max-len': 'error',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': [
      'error',
      'never'
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-cond-assign': 'off',
    'no-confusing-arrow': 'error',
    'no-continue': 'off',
    'no-console': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': [
      'error',
      'functions'
    ],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': 'off',
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'quote-props': 'off',
    'quotes': ['error', 'single'],
    'radix': [
      'error',
      'as-needed'
    ],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'off',
    'rest-spread-spacing': 'error',
    'semi': 'off',
    'semi-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'semi-style': [
      'error',
      'last'
    ],
    'sort-imports': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'off',
    'strict': 'error',
    'switch-colon-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'valid-jsdoc': 'error',
    'vars-on-top': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'error',
    'yoda': [
      'error',
      'never'
    ]
  }
};
