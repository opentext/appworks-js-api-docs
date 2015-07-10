'use strict';

angular.module('awjsDoc', ['ngMaterial']);

angular
    .module('awjsDoc')
    .controller('ApplicationController', ['$scope', '$mdSidenav', ApplicationController]);

function ApplicationController($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.navigateTo = function (partial, event) {
        $scope.currentView = partial;
    };

    $scope.currentView = 'overview';
}
