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

basic_test.BASIC_TEST('DefTypes', 'Double', `
DEFDBL A-Z
x = 3 / 2
print x
`, `
1.5
`);

basic_test.BASIC_TEST('DefTypes', 'Single', `
DEFSNG A-Z
x = 3 / 2
print x
`, `
1.5
`);

basic_test.BASIC_TEST('DefTypes', 'Integer', `
DEFINT A-Z
x = 3 / 2
print x
`, `
1
`);

basic_test.BASIC_TEST('DefTypes', 'Long', `
DEFLNG A-Z
x = 3 / 2
print x
`, `
1
`);

basic_test.BASIC_TEST('DefTypes', 'String', `
DEFSTR A-Z
x = "hello"
print x
`, `
hello
`);

basic_test.BASIC_TEST('DefTypes', 'BadRange', `
DEFSTR Z-A
`, `
`, `
Invalid variable range at line 2
`);

basic_test.BASIC_TEST('DefTypes', 'Multiple', `
DEFINT A-Z
DEFDBL A-B, Y-Z
a = 3/2
y = 3/2
print a
print y
`, `
1.5
1.5
`);

