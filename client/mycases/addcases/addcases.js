angular.module('dentisto.addcases', ['ui.bootstrap'])


.controller('addUserCaseCtrl',function($scope, Auth,$rootScope, $modalInstance) {

  $scope.ucase= {};
  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.addCase = function(){
    console.log('add case has been invoked')
    Auth.addcase($scope.ucase);
    $scope.close();
    $rootScope.initializeCases();
  };  
});