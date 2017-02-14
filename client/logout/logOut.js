angular.module('dentisto.logOut', [])
.controller('logOutCtrl', function ($scope,$state,Auth) {
	Auth.logOut();
	$state.go('sign');
});