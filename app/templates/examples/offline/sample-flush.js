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

document.addEventListener('deviceready', function () {
    // must register the event handlers first.
    appworks.offline.registerEventHandler('myEvent1', successFn);
    appworks.offline.registerEventHandler('myEvent2', successFn2);
    // flush existing requests
    appworks.offline.flush();
});

function successFn(image) {
    alert('got the first image');
    alert(myPrivateVar);
    appworks.offline.removeEventHandler('myEvent1', successFn);
}

function successFn2(image) {
    alert('got the second image');
    appworks.offline.removeEventHandler('myEvent2', successFn2);
}

function successFn3(image) {
    alert('got the third image');
}

function errorFn(err) {
    console.log(err);
}