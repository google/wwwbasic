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

LINTER_DIR=./third_party/install_linter
ESLINT=${LINTER_DIR}/node_modules/.bin/eslint

# Install or update eslint as needed.
OLD_PWD=$(pwd)
if [ -f ${ESLINT} ]; then
  cd ${LINTER_DIR}
  npm update
else
  mkdir -p ${LINTER_DIR}
  cd ${LINTER_DIR}
  npm init -y
  npm install eslint --save-dev
fi
cd ${OLD_PWD}

# Lint it.
${ESLINT} $* \
    --ignore-pattern '!.eslintrc.js' \
    .eslintrc.js wwwbasic.js test/ tools/
