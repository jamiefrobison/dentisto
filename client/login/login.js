angular.module('dentisto.logApp', [])
.controller('loginCrl', function ($scope, $state, Auth) {
        $scope.user={};
        
        $scope.backTohome= function(){
          $state.go('sign.slideBar');            
        };
        
        $scope.SendData = function () {
           if($scope.user.email&&$scope.user.password){
            var data = {
                email: $scope.user.email,
                password: $scope.user.password
            }
        
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
            Auth.logIn(data, config);
        }

       }
    //}
 })