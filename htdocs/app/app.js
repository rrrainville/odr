var RescueApp = angular.module("RescueApp", ['ngRoute','daypilot']);

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

        .when('/admin', {
            templateUrl :   'views/admin/console.html',
            controller  :   'LoginController'
        })

        .when('/users', {
            templateUrl :   'views/admin/users.html',
            controller  :   'LoginController'
        })

        .when('/user/:id', {
            templateUrl :   'views/admin/user.html',
            controller  :   'LoginController'
        })

        .when('/organizations', {
            templateUrl :   'views/admin/organizations.html',
            controller  :   'LoginController'
        })

        .when('/organization/:id', {
            templateUrl :   'views/admin/organization.html',
            controller  :   'LoginController'
        })

        .when('/securityroles', {
            templateUrl :   'views/admin/securityroles.html',
            controller  :   'LoginController'
        })

        .when('/securityrole/:id', {
            templateUrl :   'views/admin/securityrole.html',
            controller  :   'LoginController'
        })

        .when('/reports', {
            templateUrl :   'views/admin/reports.html',
            controller  :   'LoginController'
        })

        .when('/report/:id', {
            templateUrl :   'views/admin/report.html',
            controller  :   'LoginController'
        })

        .when('/documents', {
            templateUrl :   'views/admin/documents.html',
            controller  :   'LoginController'
        })

        .when('/document/:id', {
            templateUrl :   'views/admin/document.html',
            controller  :   'LoginController'
        })

        .when('/finance', {
            templateUrl :   'views/finance/summary.html',
            controller  :   'LoginController'
        })

        .when('/finance/accounts', {
            templateUrl :   'views/finance/accounts/accounts.html',
            controller  :   'LoginController'
        })

        .when('/finance/account/:id', {
            templateUrl :   'views/finance/accounts/account.html',
            controller  :   'LoginController'
        })

        .when('/donation', {
            templateUrl :   'views/finance/receivable.html',
            controller  :   'LoginController'
        })

        .when('/payment', {
            templateUrl :   'views/finance/payment.html',
            controller  :   'LoginController'
        })

        .when('/transfer', {
            templateUrl :   'views/finance/transfer.html',
            controller  :   'LoginController'
        })

        .when('/activities', {
            templateUrl :   'views/activities/activities.html',
            controller  :   'EventController'
        })

        .when('/activities/appointments', {
            templateUrl :   'views/activities/appointments/appointments.html',
            controller  :   'LoginController'
        })

        .when('/activities/appointment/:id', {
            templateUrl :   'views/activities/appointments/appointment.html',
            controller  :   'LoginController'
        })

        .when('/activities/emails', {
            templateUrl :   'views/activities/emails/emails.html',
            controller  :   'LoginController'
        })

        .when('/activities/email/:id', {
            templateUrl :   'views/activities/emails/email.html',
            controller  :   'LoginController'
        })

        .when('/activities/phonecalls', {
            templateUrl :   'views/activities/phonecalls/phonecalls.html',
            controller  :   'LoginController'
        })

        .when('/activities/phonecall/:id', {
            templateUrl :   'views/activities/phonecalls/phonecall.html',
            controller  :   'LoginController'
        })

        .when('/activities/tasks', {
            templateUrl :   'views/activities/tasks/tasks.html',
            controller  :   'LoginController'
        })

        .when('/activities/task/:id', {
            templateUrl :   'views/activities/tasks/task.html',
            controller  :   'LoginController'
        })

        .when('/activities/transports', {
            templateUrl :   'views/activities/transports/transports.html',
            controller  :   'LoginController'
        })

        .when('/activities/transport/:id', {
            templateUrl :   'views/activities/transports/transport.html',
            controller  :   'LoginController'
        })

        .when('/activities/vetvisits', {
            templateUrl :   'views/activities/vetvisits/vetvisits.html',
            controller  :   'LoginController'
        })

        .when('/activities/vetvisit/:id', {
            templateUrl :   'views/activities/vetvisits/vetvisit.html',
            controller  :   'LoginController'
        })

        .when('/activities/events', {
            templateUrl :   'views/activities/events/events.html',
            controller  :   'EventController'
        })

        .when('/activities/event/:id', {
            templateUrl :   'views/activities/events/event.html',
            controller  :   'EventController'
        })

        .otherwise({
            redirectTo :    '/'
        });
}]);