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

global.debug = true;
basic_test.BASIC_TEST('Functions', 'Classic', `
DEF FNdist(x, y) = SQR(x^2 + y^2)
PRINT FNdist(3, 4)
`, `
5
`);

basic_test.BASIC_TEST('Functions', 'Recursive', `
FUNCTION Factorial(n AS INTEGER) AS INTEGER
  IF n = 0 OR n = 1 THEN
    Factorial = 1
  ELSE
    Factorial = n * Factorial(n)
  END IF
END FUNCTION

PRINT Factorial(4)
`, `
24
`);

