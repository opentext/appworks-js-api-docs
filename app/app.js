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

'use strict';

angular.module('awjsDoc', ['ngMaterial', 'hljs']);

angular
    .module('awjsDoc')
    .controller('ApplicationController', ['$scope', '$mdSidenav', ApplicationController]);

function ApplicationController($scope, $mdSidenav) {
    var readableViews = {
        'introduction': 'Introduction',
        'getting-started': 'Getting Started',
        'demos': 'Demos',
        'overview': 'Overview',
        'installation': 'Installation',
        'api/device': 'On Device Technology',
        'api/offline': 'Offline Access',
        'api/secure-storage': 'Secure Storage',
        'api/notifications': 'Notifications',
        'api/auth': 'Authentication'
    };

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.navigateTo = function (partial, event) {
        $scope.currentView = partial;
        setReadableView($scope.currentView);
    };

    function setReadableView(view) {
        $scope.currentViewReadable = readableViews[view];
    }

    $scope.currentView = 'introduction';
    setReadableView($scope.currentView);
}
