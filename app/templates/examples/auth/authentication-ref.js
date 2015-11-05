appworks.auth.authenticate().then(function (authResponse) {

    // do something with auth response, handle failure with a timeout
    var headers = {
        token: authResponse.oauthToken
    };
});