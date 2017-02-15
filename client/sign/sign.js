angular.module('dentisto.sign', [])
.controller('signCtlr', function ($scope,$http,$state,Auth) {
  if(Auth.isAuth()){
  	$state.go('home.profile')
  } else{
  	$state.go('sign.login')
  }
});