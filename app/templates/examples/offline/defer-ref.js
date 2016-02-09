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

// angularJS example excerpt taken from Scout - https://github.com/opentext/appworks-app-scout

var offlineEvents = {
        get: '$csDocument.getDocument',
        upload: '$csDocument.uploadDocument'
    },
    offlineFns = {
        get: getDocument,
        upload: uploadDocument
    },
    self = this;

document.addEventListener(offlineEvents.get, evalFnFromOfflineEvent);

function evalFnFromOfflineEvent(evt) {
    var evt = evt.detail.data.detail;
    getDocument.apply(this, evt.args);
    document.removeEventListener(evt.eventListener, offlineFns[evt.eventListener]);
}

function getDocument(folderId, filename, saveAsFilename) {
    var promise = $q.defer();


    if (appworks.network.online) {
        $auth.reauth().then(getDocumentOnReauth);
    } else {
        appworks.offline.defer('get', arguments, 'documentService.getDocument');
    }


    function getDocumentOnReauth() {
        // ...
    }
}