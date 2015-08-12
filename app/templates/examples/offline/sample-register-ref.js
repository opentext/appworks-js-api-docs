appworks.offline.registerEventHandler('myEvent', successFn);

function successFn(image) {
    alert('success!');
    appworks.offline.removeEventHandler('myEvent', successFn);
}