RescueApp.controller("OrganizationController", function($scope, $http, $location) {
    $scope.pageSize = 10;
    $scope.sortKey = 'organization.name';
    $scope.reverse = false;
    $scope.data = [];

    getOrganizations();

    function getOrganizations() {
        $http.get("api/v1/organizations.php").then(function(result){
            $scope.organizations = result.data.body;
        });
    }
    $scope.go = function(path) {
        $location.url(path);
    };

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});