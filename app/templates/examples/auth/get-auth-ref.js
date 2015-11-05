var authResponse = appworks.auth.getAuth();

var url = authResponse.gatewayUrl + '/v1/backend';

var headers = {
    token: authResponse.authtoken
};

var data = {
    account: 'simon1234',
    balance: 10000000000
};

updateBankBalance(url, headers, data);

function updateBankBalance(url, headers, data) {
    // send http request to update bank balance
}