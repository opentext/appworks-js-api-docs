function getItemFromCache() {
    appworks.cache.getItem('myKey', function (item) {
        alert(item);
    });
}