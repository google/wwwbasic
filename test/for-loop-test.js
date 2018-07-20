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

basic_test.BASIC_TEST('ForLoop', 'OneToTen', `
FOR i = 1 to 10
  PRINT i
NEXT i
`, `
1
2
3
4
5
6
7
8
9
10
`);

basic_test.BASIC_TEST('ForLoop', 'OneToTenStep2', `
FOR i = 1 to 10 STEP 2
  PRINT i
NEXT i
`, `
1
3
5
7
9
`);

basic_test.BASIC_TEST('ForLoop', 'OneToTenStep3', `
FOR i = 1 to 10 STEP 3
  PRINT i
NEXT i
`, `
1
4
7
10
`);

basic_test.BASIC_TEST('ForLoop', 'TenToOneStepMinusOne', `
FOR i = 10 to 1 STEP -1
  PRINT i
NEXT i
`, `
10
9
8
7
6
5
4
3
2
1
`);

basic_test.BASIC_TEST('ForLoop', 'Nested3', `
FOR i = 1 to 3
  FOR j = 1 to 3
    PRINT i; " "; j
  NEXT j
NEXT i
`, `
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
`);

