angular.module('dentisto.Profile', ['ui.bootstrap'])

.controller('ProfileCtrl', function ($scope, $rootScope, $modal,Auth) {
  $scope.Profile={};
  $scope.flag=false;

  $rootScope.initializeProfile = function(){ 
    Auth.getProfile().then(function(profile){
  	if(profile){
  	  $scope.Profile=profile.data;
      $scope.flag=true;
  	} else
  	  console.log('somthing went wrong');
  }).catch(function(error){
  	console.error(error);
  })
}
  $scope.open = function () {
    var modalInstance = $modal.open({
		  controller: 'updateProfileCtrl',
      templateUrl: 'studentprofile/editProfile/updateProfile.html',
    });
  }

  $rootScope.initializeProfile();
});
