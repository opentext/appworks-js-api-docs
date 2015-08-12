var options = new FileUploadOptions();
options.mimeType="text/plain";
options.method = "POST";

var headers={'headerParam':'headerValue'};

options.headers = headers;

function onSuccess(entry) {
    console.log(entry);
}

function onError(err) {
    console.log(err);
}

appworks.storage.upload('file.png', 'http://my-content-server/nodes', onSuccess, onError, options);