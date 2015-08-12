$(document).ready(function () {
    var headers = {},
        options = {method: 'GET', eventListener: 'myEvent', headers: headers};

    // register an event handler for a success status code
    appworks.offline.registerEventHandler('myEvent', successFn);
    // register an event handler for an error status code
    appworks.offline.registerEventHandler('myEvent__error', errorFn);

    appworks.offline.queue('http://thecatapi.com/api/images/get', options);
});

function successFn(image) {
    alert('success!');
    appworks.offline.removeEventHandler('myEvent', successFn);
}

function errorFn(err) {
    console.log(err);
}