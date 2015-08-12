// js/index.js
function storeFile() {
    // will request an image from a url, and store it under the name 'file.jpg'
    // later, retrieve this file using this filename
    appworks.storage.storeFile('file.jpg', 'http://thecatapi.com/api/images/get', function (data) {
        // file is base 64 encoded string of stored file
        console.log(file);
    });
}