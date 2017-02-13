angular.module('dentisto.studentCases', [])



.controller('myCasesCtrl', function($scope){
	$scope.options = ['male', 'female	'];
	console.log($scope.selectedOption)
})