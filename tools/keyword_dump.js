#! /usr/bin/env node
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

var fs = require('fs');
var path = require('path');

var root_dir = path.dirname(__dirname);
var source_file = path.join(root_dir, 'wwwbasic.js');
var source = fs.readFileSync(source_file, 'utf8');

var p;
var keywords = {};

// Gather Skip('FOO');
var re = /Skip\('([^']+)'\)/g;
while ((p = re.exec(source)) !== null) {
  keywords[p[1]] = 1;
}

// Gather tok == 'FOO'
var re = /tok == '([^']+)'/g;
while ((p = re.exec(source)) !== null) {
  keywords[p[1]] = 1;
}

// Dump unique ones.
var output = [];
for (var keyword in keywords) {
  output.push(keyword);
}
output.sort();
for (var i = 0; i < output.length; ++i) {
  console.log(output[i]);
}
