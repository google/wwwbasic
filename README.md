[![Build Status](https://travis-ci.org/google/wwwbasic.svg?branch=master)](https://travis-ci.org/google/wwwbasic) [![NPM Package](https://img.shields.io/npm/v/wwwbasic.svg)](https://www.npmjs.com/package/wwwbasic)

# wwwBASIC

wwwBASIC is an implementation of BASIC (Beginner's All-purpose Symbolic
Instruction Code) designed to be easy to run on the Web.

## How to use wwwBASIC

You can include wwwBASIC directly in Web pages:

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

You can also import wwwBASIC as a Node.js module.

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

wwwBASIC has a "work in progress" test suite.
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
* [Polar Grapher](https://google.github.io/wwwbasic/examples/polargrapher.html)
  ([source](examples/polargrapher.html)) - Draws a polar graph using trig functions.
* [Primes](https://google.github.io/wwwbasic/examples/primes.html)
  ([source](examples/primes.html)) - Primes <3000.
* [Slides](https://google.github.io/wwwbasic/examples/slides.html)
  ([source](examples/slides.html)) - Reveal.BAS :-)
* [Editor](https://google.github.io/wwwbasic/examples/editor.html)
  ([source](examples/editor.html)) - Live editor using
  [Ace](https://ace.c9.io/).

## But Why?

The immediate trigger for wwwBASIC's existence was
Ed Thelen's Nike Hercules
[simulator](http://ed-thelen.org/NikeSimulation.html#SimBrowser).
It had been written in BASIC some time back,
then ported to some unknown version of FreeBasic.
However, while he had screenshots and source code,
it also included a Windows .EXE to a download,
and the statement, "guaranteed to be free of viruses" :-/

As it was meant to capture how something historical worked,
it seemed unfortunate that something of this sort
couldn't just be accessible directly on the web.
Various whole system emulators that run on the web are available,
but booting a whole system for a small program seemed like overkill.

Hence the first goal was to get
[this](http://ed-thelen.org/nike-fromBradNelsonSept26.html) to run.

From there, bringing up
[DONKEY.BAS](https://google.github.io/wwwbasic/examples/donkey.html)
seemed a nice logical milestone.
Bringing up GORILLA.BAS and NIBBLES.BAS are a current focus.

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
