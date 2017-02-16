angular.module('dentisto.Cases', ['ui.bootstrap', 'dentisto.addcases'])

.factory('Cases', function ($window, $http) {
  	var cases={};

  	cases.addcase =function(){

  	};

  	cases.delete =function(){

  	};
  	return cases;
})

.controller('CasesCtrl', function($scope, $modal){
	$scope.mycases = [];

	$scope.openAddCase = function () {
      var modalInstance = $modal.open({
	    controller: 'addCasesCtrl',
        templateUrl: 'mycases/addcases/addcases.html'
      });
    }
})