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

basic_test.BASIC_TEST('PrintUsing', 'SimpleDecimal', `
PRINT USING "abc #.#### def"; 1.23
`, `
abc 1.2300 def
`);

basic_test.BASIC_TEST('PrintUsing', 'CommaSimpleDecimal', `
PRINT USING "abc ##,###.#### def"; 8989.23
`, `
abc  8,989.2300 def
`);

basic_test.BASIC_TEST('PrintUsing', 'CommaUnusedSimpleDecimal', `
PRINT USING "abc ##,###.#### def"; 989.23
`, `
abc    989.2300 def
`);

basic_test.BASIC_TEST('PrintUsing', 'SimpleInteger', `
PRINT USING "abc ##### def"; 8989.23
`, `
abc  8989 def
`);

basic_test.BASIC_TEST('PrintUsing', 'CommaSimpleInteger', `
PRINT USING "abc ##,### def"; 8989.23
`, `
abc  8,989 def
`);

basic_test.BASIC_TEST('PrintUsing', 'CommaUnusedSimpleInteger', `
PRINT USING "abc ##,### def"; 989.23
`, `
abc    989 def
`);

basic_test.BASIC_TEST('PrintUsing', 'Overflow', `
PRINT USING "abc ##,### def"; 123456
`, `
abc ****** def
`);

basic_test.BASIC_TEST('PrintUsing', 'Multiple', `
PRINT USING "abc ##,### def ##,### ghi"; 123456; 23456
PRINT USING "abc #,### def ##,### ghi"; 1456; 23456
`, `
abc ****** def 23,456 ghi
abc 1,456 def 23,456 ghi
`);

