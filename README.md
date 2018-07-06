# WWWBasic

WWWBasic is an implementation of BASIC (Beginner's All-purpose Symbolic
Instruction Code) designed to be easy to run on the Web.

## How to use WWWBasic

You can include WWWBasic directly in Web pages:

```
<!DOCTYPE html>
<script src="wwwbasic.js"></script>
<script type="text/basic">
PRINT "Hello World!"
FOR i = 1 to 10
  PRINT "Counting "; i
NEXT i
</script>
```

You can also import WWWBasic as a Node.js module:

```
var basic = require('./wwwbasic.js');
basic.Basic(
`
PRINT "Hello World!"
FOR i = 1 to 10
  PRINT "Counting "; i
NEXT i
`)
```

## Features

It supports a range of features including:
   * Graphics: 24-bit color, PSET, LINE, CIRCLE.
   * Input: INKEY$, GETMOUSE.
   * Source is parsed and compiled to JavaScript at load time.

## Test Suite

WWWBasic has a "Work-in-progress" test suite.
It can be run with: `./run-tests.sh`.

## Source Code Headers

Every file containing source code must include copyright and license
information. This includes any JS/CSS files that you might be serving out to
browsers. (This is to help well-intentioned people avoid accidental copying that
doesn't comply with the license.)

Apache header:

    Copyright 2018 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
