angular.module('dentisto.Profile', ['dentisto.updateProfile', 'ui.bootstrap'])

.factory('Prof', function($http){
	var profile={};

	profile.getProfile = function(){
		return $http({
			method: 'GET',
			url: '/profile'
		}).then(function(resp){
			return resp;
		})
	};
	return profile;
})

.controller('ProfileCtrl', function ($scope, $modal,Auth, Prof) {
  $scope.Profile={};
  Prof.getProfile().then(function(profile){
  	if(profile){
  	  $scope.Profile=profile.data;
  	} else
  	  console.log('somthing went wrong');
  }).catch(function(error){
  	console.error(error);
  })

  $scope.open = function () {
    var modalInstance = $modal.open({
		  controller: 'updateProfileCtrl',
      templateUrl: 'studentprofile/editProfile/updateProfile.html',
    });
  }
});
