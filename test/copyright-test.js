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

const EXCLUDED_FILENAMES = [
  '.git',
  '.gitignore',
  '.gitmodules',
  '.npmignore',
  'third_party',
  '.DS_Store',
  'package.json',
  'package-lock.json',
  'CONTRIBUTING.md',
  'LICENSE',
  'README.md',
  'keyboard.md',
];

const COPYRIGHT_JS =
`// Copyright 2018 Google LLC
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
`;

const COPYRIGHT_HTML =
`<!--
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
-->
`;

const COPYRIGHT_HASH =
`# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
`;

const COPYRIGHT_BASH = '#! /bin/bash\n' + COPYRIGHT_HASH;
const COPYRIGHT_NODE = '#! /usr/bin/env node\n' + COPYRIGHT_JS;

console.log('Copyright header test...');

function CheckDir(path) {
  var files = fs.readdirSync(path);
  files.forEach(function(file) {
    if (EXCLUDED_FILENAMES.indexOf(file) >= 0) {
      return;
    }
    if (fs.statSync(path + file).isDirectory()) {
      CheckDir(path + file + '/');
    } else {
      var data = fs.readFileSync(path + file, 'utf8');
      if (data.indexOf(COPYRIGHT_JS) != 0 &&
          data.indexOf(COPYRIGHT_HTML) != 0 &&
          data.indexOf(COPYRIGHT_NODE) != 0 &&
          data.indexOf(COPYRIGHT_BASH) != 0 &&
          data.indexOf(COPYRIGHT_HASH) != 0) {
        throw 'Missing copyright header in: ' + path + file;
      }
    }
  });
}

CheckDir('./');
console.log('[ OK ]');
