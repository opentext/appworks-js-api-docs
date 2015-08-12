// angularjs example
angular
    .module('myApp')
    .controller('NotificationsCtrl', NotificationsCtrl);


function NotificationsCtrl($scope) {

    var self = this;

    // ...

    self.clearNotifications = function () {
        self.notifications = [];
        appworks.notifications.clear();
    }
}
