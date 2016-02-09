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

// angularjs example
angular
    .module('myApp')
    .controller('NotificationsCtrl', NotificationsCtrl);


function NotificationsCtrl($scope) {

    // ...

    // notifications enabled by default
    $scope.notificationsEnabled = true;

    // turn on/off notifications by watching the notificationsEnabled variable
    $scope.$watch('notificationsEnabled', function (on) {
        if (on) {
            enableNotifications();
        } else {
            stopNotifications();
        }
    });

    function enableNotifications() {
        // turn on notifications
        appworks.notifications.on();
    }

    function stopNotifications() {
        // turn on notifications
        appworks.notifications.off();
    }
}
