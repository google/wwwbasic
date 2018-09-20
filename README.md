[![Build Status](https://travis-ci.org/google/wwwbasic.svg?branch=master)](https://travis-ci.org/google/wwwbasic) [![NPM Package](https://img.shields.io/npm/v/wwwbasic.svg)](https://www.npmjs.com/package/wwwbasic)

# WWWBasic

WWWBasic is an implementation of BASIC (Beginner's All-purpose Symbolic
Instruction Code) designed to be easy to run on the Web.

## How to use WWWBasic

You can include WWWBasic directly in Web pages:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://google.github.io/wwwbasic/wwwbasic.js"></script>
    <script type="text/basic">
      PRINT "Hello World!"
      FOR i = 1 to 10
        PRINT "Counting "; i
      NEXT i
    </script>
  </head>
</html>
```

You can also import WWWBasic as a Node.js module.

Either install  it via [npm](https://www.npmjs.com/): `npm install -S wwwbasic`

or clone the repository: `git clone https://github.com/google/wwwbasic.git`

Then run your code:
```js
var basic = require('wwwbasic'); // from NPM
// var basic = require('./wwwbasic.js'); // from within the cloned repository directory

basic.Basic(
`
PRINT "Hello World!"
FOR i = 1 to 10
  PRINT "Counting "; i
NEXT i
`);
```

## Features

It supports a range of features including:
   * Graphics: 24-bit color, PSET, LINE, CIRCLE.
   * Input: INKEY$, GETMOUSE.
   * Source is parsed and compiled to JavaScript at load time.

## Test Suite

WWWBasic has a "Work-in-progress" test suite.
It can be run with: `./run-tests.sh`.

## Examples

* [Circles](https://google.github.io/wwwbasic/examples/circles.html)
  ([source](examples/circles.html)) - Some circles...
* [DONKEY.BAS](https://google.github.io/wwwbasic/examples/donkey.html)
  ([source](examples/donkey.html)) -
  The classic "game", apparently
  [co-authored by Bill Gates himself](https://blog.codinghorror.com/bill-gates-and-donkey-bas/).
* [GET & PUT](https://google.github.io/wwwbasic/examples/getput.html)
  ([source](examples/getput.html)) - Test of GET/PUT.
* [Hello World](https://google.github.io/wwwbasic/examples/hello_world.html)
  ([source](examples/hello_world.html)) - Hello.
* [Lines](https://google.github.io/wwwbasic/examples/lines.html)
  ([source](examples/lines.html)) - Some lines...
* [Primes](https://google.github.io/wwwbasic/examples/primes.html)
  ([source](examples/primes.html)) - Primes <3000.
* [Slides](https://google.github.io/wwwbasic/examples/slides.html)
  ([source](examples/slides.html)) - Reveal.BAS :-)
* [Editor](https://google.github.io/wwwbasic/examples/editor.html)
  ([source](examples/editor.html)) - Live editor using
  [Ace](https://ace.c9.io/).

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
