angular.module('dentisto.userCases', ['ui.bootstrap'])



.controller('casesCtrl', function($scope, $modal, Auth){
  $scope.mycases=[];
  Auth.getCases().then(function(cases){
    console.log(cases.da)
     $scope.mycases =cases.data;
  $scope.flag = ($scope.mycases.length>0)? true:false;
  });


  console.log($scope.mycases)
	$scope.openAddCase = function () {
      var modalInstance = $modal.open({
	    controller: 'addUserCaseCtrl',
        templateUrl: 'mycases/addcases/addcases.html'
      });
  }

  $scope.delete = function (id) {
    Auth.deleteCase(id);

  }

})