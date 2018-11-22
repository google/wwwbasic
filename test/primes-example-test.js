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

var basic_test = require('./basic-tester.js');

function First3000Primes() {
  var expected_primes = [2];
  main: for (var i = 3; i <= 300; i += 2) {
    for (var j = 3; j < i; ++j) {
      if (i % j == 0) {
        continue main;
      }
    }
    expected_primes.push(i);
  }
  return expected_primes;
}

basic_test.BASIC_TEST('PrimesExample', 'Test', `
DECLARE FUNCTION GetLengthOfNumber(n)

PRINT 2; " ";
FOR i = 3 TO 300 STEP 2
  numLength = GetLengthOfNumber(i) + 1
  FOR j = 3 TO i / numLength STEP 2
    IF i MOD j = 0 THEN GOTO NotPrime
  NEXT j
  PRINT i; " ";
  NotPrime:
NEXT i
PRINT
PRINT "done"
END

FUNCTION GetLengthOfNumber(n)
  digits = 1
  WHILE digits > 9
    digits = digits + 1
    n = n / 10
  WEND
  GetLengthOfNumber = digits
END FUNCTION
`,
First3000Primes().join(' ') + ' \ndone\n');

