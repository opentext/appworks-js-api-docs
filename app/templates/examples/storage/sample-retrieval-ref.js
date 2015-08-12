var fileUrl = 'file.txt';

var win = function (dataUrl) {
    console.log(dataUrl);
};

var fail = function (error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
};

appworks.storage.getFile(fileUrl, win, fail, options);