angular.module('dentisto.signup', [])
.controller('signupClr', function ($scope,$http) {
    var x="",y="";
   $scope.info= {};
   if($scope.info.mail===undefined){
         x="female";
   }else{
        x="mail"
   }
   $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                name: $scope.name,
                email:$scope.info.email,
                password: $scope.info.password,
                gender:x,
                phoneNumber:$scope.info.phoneNumber,
                address:$scope.info.address,
                university:$scope.info.university
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/signup', data, config)
            .success(function (data, status, headers, config) {
                console.log(data) ;
            })
            .error(function (data, status, header, config) {
              console.log("error");
            });
        };

})