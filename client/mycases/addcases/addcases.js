angular.module('dentisto.addcases', ['ui.bootstrap'])


.controller('addUserCaseCtrl',function($scope, Auth,$http, $state, $modalInstance) {
  console.log('1111111111111111')
  $scope.ucase= {};
  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.addCase = function(){
    console.log('add case has been invoked')
    Auth.addcase($scope.ucase);
    $scope.close();
  };  
});