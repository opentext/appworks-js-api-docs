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
