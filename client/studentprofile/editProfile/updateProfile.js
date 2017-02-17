angular.module('dentisto.updateProfile', [])

.controller('updateProfileCtrl', function($scope, $rootScope,$http, $state, $modalInstance, Auth) {
  if(Auth.getUser() === 'student')
    $scope.type=true;
  else if(Auth.getUser() === 'patient')
    $scope.type=false;

  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.update = function(){
  	$http.post('/profile',$scope.updateuser)
      .success(function (data, status, headers, config) {
        alert(data.message)
        $scope.close();    
        $rootScope.initializeProfile();
      })
      .error(function (data, status, header, config) {
        $scope.close();
      });
  };  
});