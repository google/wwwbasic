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

basic_test.BASIC_TEST('Subroutines', 'Simple', `
SUB MyPrint(x AS INTEGER, y AS DOUBLE)
  PRINT x; " oh "; y
END SUB
MyPrint 123, 12.5
CALL MyPrint(456, 2.5)
`, `
123 oh 12.5
456 oh 2.5
`);

basic_test.BASIC_TEST('Subroutines', 'Predeclare', `
DECLARE SUB MyPrint(x AS INTEGER)
MyPrint 123
CALL MyPrint(456)
SUB MyPrint(x AS INTEGER)
  PRINT x
END SUB
`, `
123
456
`);

basic_test.BASIC_TEST('Subroutines', 'NoArgsNestedWithLocal', `
DECLARE SUB DumpIt()
SUB DumpIt()
  x = 1
  PRINT "hello there"
END SUB
SUB DoIt2()
  PRINT "a"
  DumpIt
  PRINT "b"
  DumpIt
  PRINT "c"
END SUB
DoIt2
`, `
a
hello there
b
hello there
c
`);

