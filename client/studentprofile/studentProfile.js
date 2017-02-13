angular.module('dentisto.studentProfile', [])

.factory('Studentprof', function($http){
	var student={};

	student.getProfile = function(){
		return $http({
			method: 'GET',
			url: '/studentprofile'
		}).then(function(resp){
			console.log(resp);
			return respr;
		})

	};


	return student;
})

.controller('studentProfileCtrl', function ($scope, Studentprof) {
	$scope.studentProfile={};
	// {name: 'saamr', 
	// 	email:'saamr@hotmail.com',phone:'2435234'
	// 	, year:'3', uni_name:'jordan', age:'24', gender:'male'};

  Studentprof.getProfile().then(function(student){
  		if(student){
  			console.log(student)
  			$scope.studentProfile=student;
  		}
  		else
  			console.log('somthing went wrong');

  }).catch(function(error){
  	console.error(error);
  })



  $scope.updateProfile = function(){
  	
  }

});
