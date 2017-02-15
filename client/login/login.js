angular.module('dentisto.logApp', [])
.controller('loginCrl', function ($scope, $state, Auth) {
    // if(Auth.isAuth()){
    //    $state.go('home.profile')
    // }else{
        $scope.user={};
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