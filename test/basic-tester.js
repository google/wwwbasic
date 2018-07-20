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

var basic = require('../wwwbasic.js');

global.debug = 1;

function BASIC_TEST(suite, name, code, expected_log, expected_error) {
  var full_name = suite + '.' + name;
  console.log('...... ' + full_name);

  code = code.substr(1);  // skip \n
  expected_log = expected_log.substr(1);  // skip \n
  if (expected_error !== undefined) {
    expected_error = expected_error.substr(1);  // skip \n
  }

  var result_log = '';
  var result_error = '';
  var console_log = console.log;
  var console_error = console.error;
  try {
    console.log = function(msg) {
      result_log += msg + '\n';
    };
    console.error = function(msg) {
      result_error += msg + '\n';
    };
    basic.Basic(code);
    if (result_log != expected_log) {
      throw 'Unexpected log:\n' + result_log +
        '\nExpected:\n' + expected_log;
    }
    if (expected_error !== undefined && result_error != expected_error) {
      throw 'Unexpected error:\n' + result_error +
        '\nExpected:\n' + expected_error;
    }
  } finally {
    console.log = console_log;
    console.error = console_error;
  }
  console.log('[ OK ]');
}

exports.BASIC_TEST = BASIC_TEST;
