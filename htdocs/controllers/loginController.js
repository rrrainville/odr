RescueApp.controller("LoginController", function($scope, $http, $location) {
    $scope.go = function(path) {
        $location.url(path);
    };
});