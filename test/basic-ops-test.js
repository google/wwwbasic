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

basic_test.BASIC_TEST('BasicOps', 'Negate', `
PRINT -123
`, `
-123
`);

basic_test.BASIC_TEST('BasicOps', 'FourOps', `
PRINT -123+123
PRINT -123-123
PRINT 1+2*4
PRINT 1+2/4
`, `
0
-246
9
1.5
`);

basic_test.BASIC_TEST('BasicOps', 'Power', `
PRINT 2^3
`, `
8
`);

basic_test.BASIC_TEST('BasicOps', 'PowerNeg', `
PRINT -2^4
`, `
-16
`);

basic_test.BASIC_TEST('BasicOps', 'Precidence1', `
PRINT 2^4*3
`, `
48
`);

basic_test.BASIC_TEST('BasicOps', 'Precidence2', `
PRINT 3*2^4
`, `
48
`);

