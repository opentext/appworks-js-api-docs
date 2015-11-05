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