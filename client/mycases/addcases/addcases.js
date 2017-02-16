angular.module('dentisto.addcases', [])

.controller('addCasesCtrl', function($scope, $rootScope,$http, $state, $modalInstance, Auth) {
  $scope.case= {};
  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.addcase = function(){
  	$http.post('/mycases',$scope.case)
      .success(function (data, status, headers, config) {
        alert(data.message);
        $scope.close();    
      })
      .error(function (data, status, header, config) {
        alert(data.error)
        $scope.close();
      });
  };  
});