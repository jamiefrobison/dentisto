 angular.module('dentisto.logApp', [])
.controller('loginCrl', function ($scope, $http) {
          $scope.user={};
        $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                email: $scope.email,
                password: $scope.password
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/login', data, config)
            .success(function (data, status, headers, config) {
                console.log(data) ;
            })
            .error(function (data, status, header, config) {
              console.log("error");
            });
        };
    $scope.cancel = function () {

    $modalInstance.dismiss('cancel');
};

    });

