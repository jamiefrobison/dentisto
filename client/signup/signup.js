angular.module('dentisto.signup', [])
.controller('signupClr', function ($scope,$http,$state,Auth) {
  // if(Auth.isAuth()){
  //   $state.go('home');
  // } else{
    $scope.info= {};
    $scope.SendData = function () {
      var data = {
        name: $scope.info.name,
        email:$scope.info.email,
        password: $scope.info.password,
        gender:$scope.info.gender,
        phoneNumber:$scope.info.phoneNumber,
        address:$scope.info.address,
        university:$scope.info.university
        };
        console.log(data);

        var config = {
          headers : {
            'Content-Type': 'application/json'
          }
        }
        Auth.register(data, config);   
    };
  //}
  

})