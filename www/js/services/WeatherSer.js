angular.module('WeatherSer', [])
    .factory('WeatherService', function ($http) {
        return {
            getWeatherData: function (cityName, successcb, errorcb) {

                $http({
                        method: "get",
                        url: "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text = '" + cityName + "')&format=json&env=store://datatables.org/alltableswithkeys",
                        headers: {
                            "Accept": "application/json;odata=verbose"
                        }
                    })
                    .success(function (data, status, headers, config) {
                        successcb(data);
                    })
                    .error(function (data, status, headers, config) {
                        errorcb(data);
                    });
            }

        }
    })
