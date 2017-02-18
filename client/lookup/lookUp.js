angular.module('dentisto.studentLookup', [])

.controller('lookUpCtrl', function ($scope, $http, $rootScope, $interval,Auth) {
  $scope.cases = []; // for all cases..
  //$scope.flag=false;

		if(Auth.getUser()==="student"){
			$scope.type = true;
		} else {
			$scope.type = false;
		}	
	

	$rootScope.initializeLookup = function(){ 
    $http.get('/lookup') //to get the All cases from the server...
    	.success(function (data) {
    	if(data.length){
    	  $scope.flag=true;
    	  $scope.cases=data;
    	} else{
    		alert('there is no cases to show right now, you may want to try later :(');	
    	}

    	})
    	.error(function (data) {
    	alert("error to get data :(");
    	});
	};
});
