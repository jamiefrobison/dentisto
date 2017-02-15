angular.module('dentisto.updateProfile', [])

.controller('updateProfileCtrl', function($scope, $rootScope,$http, $state, $modalInstance) {
	console.log($rootScope.Profile);
	$scope.updateuser=$rootScope.Profile;
  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.update = function(){
  		console.log($scope.updateuser)
  	 $http.post('/profile',$scope.updateuser)
          .success(function (data, status, headers, config) {
            $scope.close();    
          })
          .error(function (data, status, header, config) {
            console.log("error");
            $scope.close();
          });
  };

  
});