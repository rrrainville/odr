var RescueApp = angular.module("RescueApp", ['ngRoute']);

RescueApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl :   'views/dashboard.html',
            controller  :   'LoginController'
        })
        
        .when('/dashboard', {
            templateUrl :   'views/dashboard.html',
            controller  :   'LoginController'
        })

        .when('/login', {
            templateUrl :   'views/login.html',
            controller  :   'LoginController'
        })

        .when('/signup', {
            templateUrl :   'views/signup.html',
            controller  :   'LoginController'
        })
        
        .when('/forgot', {
            templateUrl :   'views/forgot.html',
            controller  :   'LoginController'
        })
        
        .when('/animals', {
            templateUrl :   'views/animals/animals.html',
            controller  :   'LoginController'
        })
        
        .when('/animal/:id', {
            templateUrl :   'views/animals/animal.html',
            controller  :   'LoginController'
        })
        
        .when('/people', {
            templateUrl :   'views/people/people.html',
            controller  :   'LoginController'
        })
        
        .when('/person/:id', {
            templateUrl :   'views/people/person.html',
            controller  :   'LoginController'
        })
        
        .when('/vets', {
            templateUrl :   'views/vets/vets.html',
            controller  :   'LoginController'
        })
        
        .when('/vet/:id', {
            templateUrl :   'views/vets/vet.html',
            controller  :   'LoginController'
        })
        
        .when('/inventory', {
            templateUrl :   'views/inventory/inventory.html',
            controller  :   'LoginController'
        })
        
        .when('/product/:id', {
            templateUrl :   'views/inventory/product.html',
            controller  :   'LoginController'
        })
        
        .otherwise({
            redirectTo :    '/'
        });
}]);