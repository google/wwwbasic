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

basic_test.BASIC_TEST('Type', 'InvalidType', `
DIM x AS SINGLE
PRINT x.y
`, `
`, `
Not a struct type at line 2
`);

basic_test.BASIC_TEST('Type', 'InvalidField', `
TYPE vector
  x AS SINGLE
  y AS SINGLE
END TYPE

DIM v AS vector
PRINT v.z
`, `
`, `
Invalid field name at line 7
`);

basic_test.BASIC_TEST('Type', 'Simple', `
TYPE vector
  x AS SINGLE
  y AS SINGLE
END TYPE

DIM u AS vector
DIM v AS vector

u.x = 1
u.y = 2
v.x = 3
v.y = 4

PRINT u.x
PRINT u.y
PRINT v.x
PRINT v.y
`, `
1
2
3
4
`);

basic_test.BASIC_TEST('Type', 'Array', `
TYPE vector
  x AS SINGLE
  y AS SINGLE
END TYPE

DIM points(10) AS vector

FOR i = 1 to 10
  points(i).x = i
  points(i).y = i + 1
NEXT i

total = 0
FOR i = 1 to 10
  total = total + points(i).x
NEXT i

PRINT total
`, `
55
`);

