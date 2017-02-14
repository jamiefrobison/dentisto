angular.module('dentisto.Profile', [])

.factory('Prof', function($http){
	var profile={};

	profile.getProfile = function(){
		return $http({
			method: 'GET',
			url: '/profile'
		}).then(function(resp){
			console.log(resp);
			return resp;
		})

	};

	

	return profile;
})

.controller('ProfileCtrl', function ($scope, Auth,Prof) {
	$scope.Profile=
	{name: 'saamr', 
		email:'saamr@hotmail.com',phone:'2435234'
		, year:'3', address:'jordan', age:'24', gender:'male'};

  // Prof.getProfile().then(function(profile){
  // 		if(profile){
  // 			$scope.studentProfile=profile;
  // 		}
  // 		else
  // 			console.log('somthing went wrong');

  // }).catch(function(error){
  // 	console.error(error);
  // })



  // $scope.updateProfile = function(){
  	
  // }

});
