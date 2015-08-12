angular.module('starter.controllers', [])

    .controller('DeviceCtrl', function ($scope) {
        var self = this;

        self.notifications = [];
        // notifications enabled by default
        self.notificationsEnabled = true;

        // turn on/off notifications by watching the notificationsEnabled variable
        $scope.$watch('device.notificationsEnabled', function (on) {
            if (on) {
                self.enableNotifications();
            } else {
                self.stopNotifications();
            }
        });

        // register a callback for new notifications. this one just adds the notification to the notifications list
        appworks.notifications.handler(function (notification) {
            $scope.$apply(self.notifications.push(notification));
        });

        // clear notifications
        self.clearNotifications = function () {
            self.notifications = [];
            appworks.notifications.clear();
        };

        // turn off notifications. existing notifications are deleted.
        self.stopNotifications = function () {
            appworks.notifications.off();
        };

        // turn on notifications. if a handler is defined it will be called as soon as a new notification comes in
        self.enableNotifications = function () {
            appworks.notifications.on();
        };

        // get all notifications for this app
        self.getNotifications = function () {
            self.syncNotifications();
        };

        self.syncNotifications = function () {
            $scope.$applyAsync(self.notifications = appworks.notifications.get());
        };

    });