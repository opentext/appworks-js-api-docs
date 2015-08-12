// js/index.js
function getFileFromStorage() {
    appworks.storage.getFile('file.jpg', function (dataUrl) {
        // make the image the background of the document
        var el = document.querySelector('body');
        el.setAttribute('style', 'background: url(' + dataUrl + ') no-repeat; background-size: cover;');
    }, function (err) {
        console.log(err)
    });
}