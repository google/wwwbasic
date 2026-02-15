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

basic_test.BASIC_TEST('ErrorHandling', 'OnErrorGoto', `
ON ERROR GOTO a
ERROR 123
PRINT "BAD"
END
a:
  PRINT "PASS"
  END
`, `
PASS
`);

basic_test.BASIC_TEST('ErrorHandling', 'OnErrorResumeNext', `
ON ERROR RESUME NEXT
ERROR 123
print "PASS"
END
`, `
PASS
`);

basic_test.BASIC_TEST('ErrorHandling', 'ResumeNext', `
ON ERROR GOTO a
ERROR 123
PRINT "PASS2"
END
a:
  PRINT "PASS1"
  RESUME NEXT
`, `
PASS1
PASS2
`);

basic_test.BASIC_TEST('ErrorHandling', 'Resume', `
ON ERROR GOTO a
ERROR 123
PRINT "PASS2"
END
a:
  PRINT "PASS1"
  RESUME b
  PRINT "BAD"
  END
b:
  PRINT "DONE"
  END
`, `
PASS1
DONE
`);

