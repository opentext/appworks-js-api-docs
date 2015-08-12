document.addEventListener('deviceready', function () {
    appworks.offline.getStoredRequests(function (requests) {
        console.log(requests);
    });
});