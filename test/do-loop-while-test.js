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

basic_test.BASIC_TEST('DoLoopWhile', 'OneToFive', `
i = 1
DO
  PRINT i
  i = i + 1
LOOP WHILE i <= 5
`, `
1
2
3
4
5
`);

basic_test.BASIC_TEST('DoLoopWhile', 'SixToOne', `
i = 6
DO
  PRINT i
  i = i - 1
LOOP WHILE i > 0
`, `
6
5
4
3
2
1
`);

basic_test.BASIC_TEST('DoLoopWhile', 'LoopUntilSixToOne', `
i = 6
DO
  PRINT i
  i = i - 1
LOOP UNTIL i = 0
`, `
6
5
4
3
2
1
`);

basic_test.BASIC_TEST('DoLoopWhile', 'LoopSideBySide', `
i = 6
DO
  PRINT i
  i = i - 1
LOOP UNTIL i = 0
DO
  PRINT i
  i = i + 1
LOOP UNTIL i = 4
`, `
6
5
4
3
2
1
0
1
2
3
`);

basic_test.BASIC_TEST('DoLoopWhile', 'JustDoLoop', `
i = 6
DO
  PRINT i
  i = i - 1
  IF i = 0 THEN GOTO done
LOOP
done:
`, `
6
5
4
3
2
1
`);

