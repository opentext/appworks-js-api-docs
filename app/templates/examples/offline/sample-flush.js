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