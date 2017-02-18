angular.module('dentisto.userCases', ['ui.bootstrap'])



.controller('casesCtrl', function($scope, $rootScope,$modal, Auth){
  $scope.mycases=[];
  $scope.pageFlag=false;
  $scope.flag=false;
  $rootScope.initializeCases = function(){ 
    Auth.getCases().then(function(cases){
      if(cases.data.length){
        $scope.mycases =cases.data;
        $scope.flag = true;
      } else{
        $scope.flag=false;
      }
      $scope.pageFlag=true;
    });
  };


	$scope.openAddCase = function () {
      var modalInstance = $modal.open({
	    controller: 'addUserCaseCtrl',
        templateUrl: 'mycases/addcases/addcases.html'
      });
  }

  $scope.delete = function (id) {
    Auth.deleteCase(id);
    $rootScope.initializeCases();
  }

})