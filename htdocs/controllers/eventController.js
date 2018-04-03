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
            start: new DayPilot.Date("2018-03-28T10:00:00"),
            end: new DayPilot.Date("2018-03-28T14:00:00"),
            id: DayPilot.guid(),
            text: "First Event"
        }
    ];

    $scope.add = function () {
        $scope.events.push(
            {
                start: new DayPilot.Date("2018-03-28T10:00:00"),
                end: new DayPilot.Date("2018-03-28T12:00:00"),
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