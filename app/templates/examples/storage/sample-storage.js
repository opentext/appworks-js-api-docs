// Copyright 2015-2016 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// js/index.js
function storeFile() {
    // will request an image from a url, and store it under the name 'file.jpg'
    // later, retrieve this file using this filename
    appworks.storage.storeFile('file.jpg', 'http://thecatapi.com/api/images/get', function (data) {
        // file is base 64 encoded string of stored file
        console.log(file);
    });
}