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

basic_test.BASIC_TEST('IfElse', 'SingleThen', `
i = 1
x = 0
FOR i = 1 TO 5
  IF i = 4 THEN x = i
NEXT i
PRINT x
`, `
4
`);

basic_test.BASIC_TEST('IfElse', 'SingleThenColon', `
i = 1
x = 0
FOR i = 1 TO 5
  IF i = 4 THEN x = i : x = 9
NEXT i
PRINT x
`, `
9
`);

basic_test.BASIC_TEST('IfElse', 'SingleThenEndIf', `
i = 1
x = 0
FOR i = 1 to 5
  IF i = 4 THEN : x = i END IF
NEXT i
PRINT x
`, `
4
`);

basic_test.BASIC_TEST('IfElse', 'SingleThenElseEndIf', `
i = 1
x = 0
y = 0
FOR i = 1 to 5
  IF i = 4 THEN : x = i ELSE : y = i END IF
NEXT i
PRINT x
PRINT y
`, `
4
5
`);
basic_test.BASIC_TEST('IfElse', 'MultiThenEndIf', `
i = 1
x = 0
FOR i = 1 to 5
  IF i = 4 THEN
    x = i
  END IF
NEXT i
PRINT x
`, `
4
`);

basic_test.BASIC_TEST('IfElse', 'MultiThenElseEndIf', `
i = 1
x = 0
y = 0
FOR i = 1 to 5
  IF i = 4 THEN
    x = i
  ELSE
    y = i
  END IF
NEXT i
PRINT x
PRINT y
`, `
4
5
`);

basic_test.BASIC_TEST('IfElse', 'MultiThenElseElseIfEndIf', `
i = 1
x = 0
y = 0
z = 0
FOR i = 1 to 5
  IF i = 4 THEN
    x = i
  ELSEIF i = 2 THEN
    z = i
  ELSEIF i = 3 THEN
    z = i
  ELSE
    y = i
  END IF
NEXT i
PRINT x
PRINT y
PRINT z
`, `
4
5
3
`);

basic_test.BASIC_TEST('IfElse', 'LessMultiThenElseElseIfEndIf', `
pz = 0
IF pz < 1 Then
  pz = 1
ELSEIF PZ > 80000/3 Then
  pz = 80000/3
END IF
PRINT pz
`, `
1
`);

basic_test.BASIC_TEST('IfElse', 'IfNumber', `
10 pz = 0
20 IF PZ < 1 THEN 40
30 PRINT "BAD"
40 PRINT "GOOD"
`, `
GOOD
`);

basic_test.BASIC_TEST('IfElse', 'IfElseNumber', `
10 FOR I=1 TO 5
20 IF I MOD 2 = 0 THEN 40 ELSE 30
30 PRINT "ODD"
31 GOTO 50
40 PRINT "EVEN"
50 NEXT I
`, `
ODD
EVEN
ODD
EVEN
ODD
`);

