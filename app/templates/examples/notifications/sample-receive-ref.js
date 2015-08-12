// angularjs example
angular
    .module('myApp')
    .controller('NotificationsCtrl', NotificationsCtrl);


function NotificationsCtrl($scope) {
    var self = this;

    self.notifications = [];

    // register a callback for new notifications. this one just adds the notification to the notifications list
    appworks.notifications.handler(function (notification) {
        $scope.$apply(self.notifications.push(notification));
    });
}


