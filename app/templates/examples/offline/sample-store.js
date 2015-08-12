var myPrivateVar = 'this is a private variable! :)';


function storeRequest() {
    var url = 'http://thecatapi.com/api/images/get',
        options1 = {eventListener: 'myEvent1', method: 'GET'},
        options2 = {eventListener: 'myEvent2', method: 'GET'},
        options3 = {method: 'GET'};

    // queue a new request. format one:
    console.log('queuing a request to be made when device is online');
    appworks.offline.queue(url, options1).then(successFn, errorFn);
    // queue a new request. format two:
    console.log('queuing a request to be made when device is online');
    appworks.offline.queue(url, options2).success(successFn2).error(errorFn);
    // queue a request without an eventListener
    console.log('queuing a request to be made when device is online');
    appworks.offline.queue(url, options3).success(successFn3).error(errorFn);
}

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