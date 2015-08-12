function setItemInCache() {
    var item = Math.random(),
    // set an expiration date for this data. default is 24 hours
        options = {expiry: new Date().getTime() + 15 * 1000};

    console.log('setting item in cache: (mykey, ' + item + ')');
    appworks.cache.setItem('myKey', item, options);
}