#! /usr/bin/env node
// Copyright 2026 Google LLC
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
var destination_file = path.join(root_dir, 'wwwbasic.mjs');
var source = fs.readFileSync(source_file, 'utf8');

var marker_re = /^[ ]*\/\/ ESM:[ ]?(.*)/;
var lines = source.split('\n');
var fixed = [];
for (var i = 0; i < lines.length; i++) {
  var m = marker_re.exec(lines[i]);
  if (m) {
    if (m[1] != '') {
      fixed.push(m[1]);
    }
    i++;
    continue;
  }
  if (lines[i].substring(0, 2) == '  ') {
    fixed.push(lines[i].substring(2));
  } else {
    fixed.push(lines[i]);
  }
}
fs.writeFileSync(destination_file, fixed.join('\n'), 'utf8');

