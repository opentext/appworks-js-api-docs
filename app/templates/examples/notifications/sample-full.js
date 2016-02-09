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