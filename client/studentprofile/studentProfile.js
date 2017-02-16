angular.module('dentisto.Profile', ['ui.bootstrap', 'dentisto.updateProfile'])

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

.controller('ProfileCtrl', function ($scope, $rootScope,$modal,Auth, Prof) {
	$scope.Profile={};
  
	// {name: 'saamr', 
	// 	email:'saamr@hotmail.com',phone:'2435234'
	// 	, year:'3', address:'jordan', age:'24', gender:'male'};

  Prof.getProfile().then(function(profile){
  		if(profile){
  			$scope.Profile=profile.data;
        $rootScope.Profile=profile.data;
  		}
  		else
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

  // $scope.updateProfile = function(){
  	
  // }

});
