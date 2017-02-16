angular.module('dentisto.signup', [])
.controller('signupClr', function ($scope, $http, Auth) {
  $scope.info= {};
  $scope.confirmtest=function(){
    if($scope.info.password===$scope.info.conpassword){
      $scope.f=false;
    }else{
      $scope.info.password="";
      $scope.info.conpassword="";
      $scope.f=true;
     
    }
  }
  $scope.SendData = function () {
    if($scope.info.name&&$scope.info.email&& $scope.info.password&&$scope.info.phoneNumber&& ($scope.info.address || $scope.info.university)){
      var data = {
        name: $scope.info.name,
        email:$scope.info.email,
        password: $scope.info.password,
        gender:$scope.info.gender,
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
});
