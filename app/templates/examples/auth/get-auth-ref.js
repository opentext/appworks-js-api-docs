// Copyright 2015-2016 Open Text
//
// Licensed under the Apache License, Version 2.0 (the "License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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