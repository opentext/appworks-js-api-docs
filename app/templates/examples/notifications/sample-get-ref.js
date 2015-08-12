// angularjs example
angular
    .module('myApp')
    .controller('NotificationsCtrl', NotificationsCtrl);


function NotificationsCtrl($scope) {
    var self = this;

    self.notifications = [];

    self.getNotifications = function () {
        self.notifications = appworks.notifications.get();
        $scope.$apply();
    };
}
