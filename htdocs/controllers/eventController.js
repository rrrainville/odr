RescueApp.controller("EventController", function ($scope, $http, $location) {
    $scope.go = function (path) {
        $location.url(path);
    };

    $scope.config = {
        startDate: new DayPilot.Date.today,
        viewType: "Month"
    };

    $scope.events = [
        {
            start: new DayPilot.Date("2018-04-28T10:00:00"),
            end: new DayPilot.Date("2018-04-28T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-ambulance'></i> Transport Billy"
        },
        {
            start: new DayPilot.Date("2018-04-15T10:00:00"),
            end: new DayPilot.Date("2018-04-15T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-phone'></i> Adoption Call for Billy"
        },
        {
            start: new DayPilot.Date("2018-04-16T10:00:00"),
            end: new DayPilot.Date("2018-04-16T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-car'></i> Dog Pickup"
        },
        {
            start: new DayPilot.Date("2018-04-21T10:00:00"),
            end: new DayPilot.Date("2018-04-21T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-envelope'></i> Thank you"
        },
        {
            start: new DayPilot.Date("2018-04-25T10:00:00"),
            end: new DayPilot.Date("2018-04-25T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-calendar-o'></i> Event Organization Meeting"
        },
        {
            start: new DayPilot.Date("2018-04-26T10:00:00"),
            end: new DayPilot.Date("2018-04-26T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-calendar-check-o'></i> ODR at PET VALU HINTONBURG - PAWS"
        },
        {
            start: new DayPilot.Date("2018-04-27T10:00:00"),
            end: new DayPilot.Date("2018-04-28T17:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-ambulance'></i> Vet Visit Bob"
        },
        {
            start: new DayPilot.Date("2018-04-29T10:00:00"),
            end: new DayPilot.Date("2018-04-29T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-phone'></i> Adoption Call for Billy"
        },
        {
            start: new DayPilot.Date("2018-04-05T10:00:00"),
            end: new DayPilot.Date("2018-04-05T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-car'></i> Dog Pickup"
        },
        {
            start: new DayPilot.Date("2018-04-11T10:00:00"),
            end: new DayPilot.Date("2018-04-11T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-envelope'></i> Thank you"
        },
        {
            start: new DayPilot.Date("2018-04-13T10:00:00"),
            end: new DayPilot.Date("2018-04-13T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-calendar-o'></i> Event Organization Meeting"
        },
        {
            start: new DayPilot.Date("2018-04-09T10:00:00"),
            end: new DayPilot.Date("2018-04-09T14:00:00"),
            id: DayPilot.guid(),
            text: "<i class='fa fa-calendar-check-o'></i> ODR at PET VALU HINTONBURG - PAWS"
        }

    ];

    $scope.add = function () {
        $scope.events.push(
            {
                start: new DayPilot.Date("2018-04-28T10:00:00"),
                end: new DayPilot.Date("2018-04-28T12:00:00"),
                id: DayPilot.guid(),
                text: "Simple Event"
            }
        );
    };

    $scope.move = function () {
        var event = $scope.events[0];
        event.start = event.start.addDays(1);
        event.end = event.end.addDays(1);
    };

    $scope.getCalendarName = function () {
        var labels = new DayPilot.Locale;

        if ($scope.config.viewType == 'Month') {
            return labels.monthNames[$scope.config.startDate.getMonth()] + " " + $scope.config.startDate.getYear();
        } else if ($scope.config.viewType == 'Week') {
            return "Week " + $scope.config.startDate.weekNumber() + " of " + $scope.config.startDate.getYear();
        } else if ($scope.config.viewType == 'Day') {
            return labels.dayNames[$scope.config.startDate.getDayOfWeek()] + " " + $scope.config.startDate.getDay() + " " + labels.monthNames[$scope.config.startDate.getMonth()] + ", " + $scope.config.startDate.getYear();
        }
    };

    $scope.rename = function () {
        $scope.events[0].text = "New name";
    };

    $scope.message = function () {
        $scope.dp.message("Hi");
        console.log($scope.dp);
    };

    $scope.Today = function () {
        $scope.config.startDate = new DayPilot.Date.today;
    };

    $scope.Next = function () {
        //var curDate = new DayPilot.Date($scope.config.startDate).addMonths(1);

        if ($scope.config.viewType == 'Month') {
            $scope.config.startDate = $scope.config.startDate.addMonths(1);
        } else if ($scope.config.viewType == 'Week') {
            $scope.config.startDate = $scope.config.startDate.addDays(7);
        } else if ($scope.config.viewType == 'Day') {
            $scope.config.startDate = $scope.config.startDate.addDays(1);
        }

        //$scope.config.startDate = new Date();
    };

    $scope.Previous = function () {
        if ($scope.config.viewType == 'Month') {
            $scope.config.startDate = $scope.config.startDate.addMonths(-1);
        } else if ($scope.config.viewType == 'Week') {
            $scope.config.startDate = $scope.config.startDate.addDays(-7);
        } else if ($scope.config.viewType == 'Day') {
            $scope.config.startDate = $scope.config.startDate.addDays(-1);
        }

        //$scope.config.startDate = new Date();
    };

    $scope.changeView = function (viewType) {
        $scope.config.viewType = viewType;
    };
});