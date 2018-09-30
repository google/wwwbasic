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

basic_test.BASIC_TEST('OnGosub', 'TwoSubroutines', `
FOR i%=1 TO 2
  ON i% GOSUB One, Two
NEXT i%
PRINT "done"
END
One: 
  PRINT i%
  RETURN
Two: 
  PRINT i%
  RETURN
`, `
1
2
done
`);

basic_test.BASIC_TEST('OnGosub', 'SubroutineAtLines', `
10  FOR i=1 TO 2
20    ON i GOSUB 60,80
30  NEXT i
40  PRINT "done"
50  END
60  PRINT "1"
70  RETURN
80  PRINT "2"
90  RETURN
`, `
1
2
done
`);

basic_test.BASIC_TEST('OnGosub', 'OutOfRange', `
ON 0 GOSUB a,b
ON 5 GOSUB a,b
ON 3 GOSUB a,b,c
PRINT "done"
END
a: 
  PRINT "a"
  RETURN
b:
  PRINT "b"
  RETURN
`, `
done
`);

