angular.module('dentisto.studentProfile', [])

.factory('Studentprof', function($http){
	var student={};

	student.getProfile = function(){

	};


	return student;
})

.controller('studentProfileCtrl', function ($scope, Studentprof) {
	$scope.studentProfile={name: 'saamr', 
		email:'saamr@hotmail.com',phone:'2435234'
		, year:'3', uni_name:'jordan', age:'24', gender:'male'};

  // Studentprof.getProfile().then(function(student){
  // 		$scope.studentProfile=student;
  // }).catch(function(error){
  // 	console.error(error);
  // })
});
