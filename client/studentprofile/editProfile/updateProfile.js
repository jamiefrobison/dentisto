angular.module('dentisto.updateProfile', [])

.controller('updateProfileCtrl', function($scope, $rootScope,$http, $state, $modalInstance, Auth, Prof) {
  if(Auth.getUser() === 'student')
    $scope.type=true;
  else if(Auth.getUser() === 'patient')
    $scope.type=false;
  $scope.close = function () {
  	$modalInstance.dismiss('cancel');
  };

  $scope.update = function(){
  	console.log($scope.updateuser)
  	$http.post('/profile',$scope.updateuser)
      .success(function (data, status, headers, config) {
        alert(data.message)
        $scope.close();    
      })
      .error(function (data, status, header, config) {
        $scope.close();
      });
  };  
});