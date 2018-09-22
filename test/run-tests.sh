#! /bin/bash
# Copyright 2018 Google LLC
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

set -e

# Move to root of project.
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd -P)"
cd ${SCRIPT_DIR}/..

# Run tests.
for x in $(ls ./test/*-test.js); do
  node $x
done

# Run linter.
echo "Linting..."
./tools/lint.sh
echo "[ OK ]"

# Make sure keyword dumper runs.
echo "Keyword dumping..."
./tools/keyword_dump.js >/dev/null
echo "[ OK ]"

# Test packaging.
echo "Test packaging..."
npm publish --dry-run >/dev/null 2>/dev/null
echo "[ OK ]"
