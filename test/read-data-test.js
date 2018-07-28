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

basic_test.BASIC_TEST('ReadData', 'NumbersSingleLine', `
FOR i = 1 to 5
  READ x
  PRINT x
NEXT i
DATA 11, 15, 19, 33, 6
`, `
11
15
19
33
6
`);

basic_test.BASIC_TEST('ReadData', 'NumbersMultiLine', `
FOR i = 1 to 3
  READ x, y
  PRINT x; ", "; y
NEXT i
DATA 11, 15, 19, 33, 6
DATA 3
`, `
11, 15
19, 33
6, 3
`);

basic_test.BASIC_TEST('ReadData', 'Strings', `
FOR i = 1 to 4
  READ a$
  PRINT "|"; a$; "|"
NEXT i
DATA this is   , a   test, " of , strings "
DATA    that's it
`, `
|this is|
|a   test|
| of , strings |
|that's it|
`);

basic_test.BASIC_TEST('ReadData', 'Restore', `
FOR i = 1 to 3
  READ x
  PRINT x
NEXT i
RESTORE 101
FOR i = 1 to 2
  READ x
  PRINT x
NEXT i
100 DATA 123
101 DATA 234
102 DATA 345
`, `
123
234
345
234
345
`);

