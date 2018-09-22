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

basic_test.BASIC_TEST('OnGoto', 'JumpInOrder', `
x = 1
ON x GOTO a,b,c
END
a:
  PRINT "1"
  x = x + 1
  ON x GOTO a,b,c
  END
b:
  PRINT "2"
  ON x+1 GOTO a,b,c
  END
c:
  PRINT "3"
  PRINT "done"
  END
`, `
1
2
3
done
`);

basic_test.BASIC_TEST('OnGoto', 'OutOfRange',`
ON 5 GOTO a,b
PRINT "done"
END
a:
  END
b:
  END
`,`
done
`);