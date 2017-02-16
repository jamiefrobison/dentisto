angular.module('dentisto.studentLookup', [])

.controller('lookUpCtrl', function ($scope,$http,$interval,Auth) {
	$scope.cases = []; // for all cases..
	$scope.array=[]; // for data from search function ..
	$scope.default=true; // to display the default data ..
	$scope.s=false; // to display the search data ..

		if(Auth.getUser()==="student"){
			$scope.type = true;
		} else {
			$scope.type = false;
		}	
	
    $http.get('/lookup') //to get the All cases from the server...
    .success(function (data) {
    	$scope.cases=data;
    })
    .error(function (data) {
    	alert("error to get data :(");
    });



	$scope.searchFun=function(){ //search function ...
		$scope.s=true;
		$scope.default=false;
		if($scope.search!==""){
			$scope.array=$scope.cases.reduce(function(acc,obj){
				for(var k in obj){
					if(obj[k].indexOf($scope.search)>-1){
						acc.push(obj)
					}
				}
				return acc;
			},[])
		}else{
			$scope.default=true;
			$scope.s=false;	
		}

	}

   //try this one...

   // $interval(function () {
   // 	$http.get('/lookup') 
   // 	.success(function (data) {
   // 		$scope.cases=data; 
   // 	})
   // 	.error(function (data) {
   // 		console.log("error to get data :(");
   // 	});
   // }, 10000);

});
