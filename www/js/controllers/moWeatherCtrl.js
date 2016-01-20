angular.module('moWeatherCtrl', [])
    .controller('WeatherController', ['$scope', 'WeatherService', function ($scope, WeatherService) {
        $scope.forcast = [];

        $scope.cities = [
            {
                City: null,
                Country: null,
                Details: "-Select a City-"
            },
            {
                City: "Chennai",
                Country: "IN",
                Details: "Chennai, IN"
            },
            {
                City: "Bangalore",
                Country: "IN",
                Details: "Bangalore, IN"
            },
            {
                City: "Pune",
                Country: "IN",
                Details: "Pune, IN"
            },
            {
                City: "Mumbai",
                Country: "IN",
                Details: "Mumbai, IN"
            }];
        $scope.currentCity = $scope.cities[0];
        $scope.SelectedCity = function (currentCity) {
            $scope.forecast = [];
            $scope.currentItem = null;
            if (currentCity.City != null) {
                WeatherService.getWeatherData(currentCity.City + "," + currentCity.Country,
                    function (data) {
                        $scope.forecast = data.query.results.channel.item.forecast;
                    },
                    function (data) {
                        alert('Error encountered while fetching Weather data. ' + data);
                    }
                )
            };
        }
            }]);
