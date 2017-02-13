angular.module('dentisto.studentLookup', [])


.factory('StudentLookUp', function($http){
	var cases={};

	cases.lookUpCases= function(){

	};

	cases.searchCases= function(){

	};

	return cases;
})
.controller('lookUpCtrl', function ($scope, StudentLookUp) {
	$scope.patientCases=[{patientName:'dan', caseName:'rrr', caseDesc:'i felt kljsdfg'},
	{patientName:'sam', caseName:'sdfg', caseDesc:'i felt kljsdfg'},
	{patientName:'man', caseName:'sdfg', caseDesc:'i felt kljsdfg'},
	{patientName:'fan', caseName:'fgh', caseDesc:'i felt kljsdfg'},
	{patientName:'pan', caseName:'sdg', caseDesc:'i felt kljsdfg'},
	{patientName:'kan', caseName:'dfhfhg', caseDesc:'i felt kljsdfg'},
	{patientName:'sad', caseName:'dfgh', caseDesc:'i felt kljsdfg'},
	{patientName:'bad', caseName:'ertyty', caseDesc:'i felt kljsdfg'}];

  // StudentLookUp.lookUpCases().then(function(cases){
  // 		$scope.patientCases=cases;
  // }).catch(function(error){
  // 	console.error(error);
  // })

  // $scope.search = function(){

  // 	StudentLookUp.searchCases
  // };
});
