angular.module('dentisto.signup', [])
.controller('signupClr', function ($scope,$http,$state,Auth) {
  if(Auth.isAuth()){
    $state.go('home');
  } else{
    var x="",y="";
    $scope.info= {};
    if($scope.info.mail===undefined){
      x="female";
    }else{
      x="mail"
    }
    $scope.SendData = function () {
    // use $.param jQuery function to serialize data from JSON 
      var data = {
        name: $scope.info.name,
        email:$scope.info.email,
        password: $scope.info.password,
        gender:x,
        phoneNumber:$scope.info.phoneNumber,
        address:$scope.info.address,
        university:$scope.info.university
        };

        var config = {
          headers : {
            'Content-Type': 'application/json'
          }
        }
        Auth.register(data, config);   
    };
  }
  

})