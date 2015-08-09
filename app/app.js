'use strict';

angular.module('awjsDoc', ['ngMaterial']);

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
        'api/notifications': 'Notifications'
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
