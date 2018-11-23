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

basic_test.BASIC_TEST('Array', '2d', `
x = 123
DIM a(17,11) AS SINGLE
addr = VARPTR(a)
y = 456
z = 789
w = 100
FOR i = 0 to 17
  FOR j = 0 to 11
    a(i, j) = i + j * 1000
  NEXT j
NEXT i
FOR i = 0 to 17
  FOR j = 0 to 11
    IF a(i, j) <> i + j * 1000 THEN
      PRINT "FAIL", i, j, a(i, j)
      END
    END IF
  NEXT j
NEXT i
PRINT VARPTR(a) - addr
PRINT x
PRINT y
PRINT z
PRINT w
PRINT "ok"
`, `
0
123
456
789
100
ok
`);

basic_test.BASIC_TEST('Array', '1dInit', `
DIM a(10) = {10,9,8,7,6,5,4,3,2,1,0}
FOR i = 0 to 10
  IF a(i) <> 10 - i THEN
    PRINT "FAIL","FAIL", i, a(i)
    END
  END IF
NEXT i
PRINT "ok"
`, `
ok
`);

basic_test.BASIC_TEST('Array', 'String', `
DIM a$(10)
FOR i = 0 to 10
  a$(i) = str$(i+1)
NEXT i
FOR i = 0 to 10
  IF val(a$(i)) <> i + 1 THEN
    PRINT "FAIL", i
  END IF
NEXT i
PRINT "ok"
`, `
ok
`);

basic_test.BASIC_TEST('Array', 'InSub', `
TYPE Stuff
  x as INTEGER
  y as INTEGER
  z as INTEGER
END TYPE

DIM SHARED foo(1 to 80, 1 to 50) AS Stuff

SUB Bar(a, b, c)
FOR i = 1 to 80
  FOR j = 1 to 50
    foo(i, j).x = a
    foo(i, j).y = b
    foo(i, j).z = c
  NEXT j
NEXT i
PRINT "done"
END SUB

FUNCTION Check(a, b, c)
FOR i = 1 to 80
  FOR j = 1 to 50
    IF foo(i, j).x <> a OR foo(i, j).y <> b OR foo(i, j).z <> c THEN
      Check = 0
      EXIT FUNCTION
    END IF
  NEXT j
NEXT i
Check = -1
END FUNCTION

SUB Baz
Bar 1, 2, 3
PRINT Check(1, 2, 3)
PRINT Check(2, 3, 4)
PRINT Check(1, 2, 3)
foo(1, 1).z = 10
PRINT Check(1, 2, 3)
Bar 1, 2, 3
PRINT Check(1, 2, 3)
END SUB

Baz
PRINT "hi"
`, `
done
-1
0
-1
0
done
-1
hi
`);

basic_test.BASIC_TEST('Array', 'InSubArg', `
TYPE Stuff
  x as INTEGER
  y as INTEGER
  z as INTEGER
END TYPE

DIM foo1(1 to 80, 1 to 50) AS Stuff
DIM foo2(1 to 80, 1 to 50) AS Stuff

SUB Bar(foo() as Stuff, a, b, c)
FOR i = 1 to 80
  FOR j = 1 to 50
    foo(i, j).x = a
    foo(i, j).y = b
    foo(i, j).z = c
  NEXT j
NEXT i
PRINT "done"
END SUB

FUNCTION Check(foo() as Stuff, a, b, c)
FOR i = 1 to 80
  FOR j = 1 to 50
    IF foo(i, j).x <> a OR foo(i, j).y <> b OR foo(i, j).z <> c THEN
      Check = 0
      EXIT FUNCTION
    END IF
  NEXT j
NEXT i
Check = -1
END FUNCTION

SUB Baz
Bar foo1(), 1, 2, 3
Bar foo2(), 5, 6, 7
PRINT Check(foo1(), 1, 2, 3)
PRINT Check(foo1(), 2, 3, 4)
PRINT Check(foo1(), 1, 2, 3)
foo1(1, 1).z = 10
PRINT Check(foo1(), 1, 2, 3)
Bar foo2(), 5, 6, 7
Bar foo1(), 1, 2, 3
PRINT Check(foo1(), 1, 2, 3)
PRINT Check(foo2(), 5, 6, 7)
END SUB

Baz
PRINT "hi"
`, `
done
done
-1
0
-1
0
done
done
-1
-1
hi
`);

