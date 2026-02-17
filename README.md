[![NPM Package](https://img.shields.io/npm/v/wwwbasic.svg)](https://www.npmjs.com/package/wwwbasic)

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

Either install it via [npm](https://www.npmjs.com/): `npm install -S wwwbasic`

or clone the repository: `git clone https://github.com/google/wwwbasic.git`

Then run your code:
```js
var basic = require('wwwbasic'); // from NPM
// var basic = require('./wwwbasic.js'); // from within the cloned repository directory

// An ESM import is also available from wwwbasic.mjs
// import basic from "wwwbasic.mjs";

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

## Options

While by default wwwBASIC processes script tags of type="text/basic",
the interpreter can also be invoked with various options.

```js
basic.Basic(codeText, {
  debug: true  // or false,
  bindings: {
    // a dictionary of external bindings, see below.
    name: myfunc,
  },
});
```

Default bindings are available from `basic.ConsoleBindings()`.
Bindings for a canvas are available from `basic.GraphicsBindings(canvas)`.

NOTE: **External bindings are currently consindered a semi-unstable feature,
use with caution.**

A Bindings can be custom (see below), but a few are foundational:

* PutCh(ch) - Print one character. PutCh(undefined) must flush.
* Halt() - Print any final message at END.
* TODO: Bindings for input!

Additionally, custom statements and procedures can be added with
the following naming convention:

* `kind_name_arguments`
* **kind** = statement / call
* **name** = the name of the subroutine or statement in lowercase
* **arguements** = argument spec see below

The argument spec uses one character per argument:

* i - input / I - optional input
* o - output / O - optional output
* p - point (x, y) / P - optional point (passes 2 values)
* s - string flag / S - optional string flag (e.g. BF for LINE)
* d - dash (e.g. in words like LINE)
* v - varptr (e.g. in words list GET / PUT, passes buffer, offset)

EXAMPLE:

```js
var bindings = GraphicsBindings(canvas);
bindings.statement_foo_pIS = function(x, y, color, style) {
  // x and y: are always available
  // color: might be undefined
  // style: might be undefined and is a literal string
};
basic.Basic(
`
foo (10, 20), 1, dashed
`, { bindings: mybindings });
```

## Test Suite

wwwBASIC has a "work in progress" test suite.
It can be run with: `./tests/run-tests.sh`.

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
