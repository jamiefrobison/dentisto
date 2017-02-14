angular.module('dentisto.logApp', [])
.controller('loginCrl', function ($scope, $http,$state,Auth) {
    if(Auth.isAuth()){
       $state.go('home')
    }else{
        $scope.user={};
        $scope.SendData = function () {
            console.log("i'm here")
           if($scope.email&&$scope.myForm.user.email.$valid){
            var data = {
                email: $scope.email,
                password: $scope.password
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

            $http.post('/signin', data, config)
            .success(function (data, status, headers, config) {
               Auth.saveToken(data.token);
               Auth.saveType(data.type);
               $state.go('home');

            })
            .error(function (data, status, header, config) {
                alert(data.error);
            });
        }

       }
    }
 })