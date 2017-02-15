var dentistoApp = angular.module('dentistoApp', 
	['ui.router', 'dentisto.Profile', 'dentisto.studentLookup',
 'dentisto.studentCases', 'dentisto.logApp', 'dentisto.signup',
  'dentisto.logOut', 'dentisto.sign']);



dentistoApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  $urlRouterProvider
  .when('/home', ['$state', function($state){
    $state.go('sign.login');
  }])
  .otherwise('sign');

  $stateProvider
  .state('sign', {
    url: '/sign',
    templateUrl: 'sign/sign.html',
    controller: 'signCtlr'
  })
  .state('sign.login', {
    templateUrl: 'login/login.html',
    controller: 'loginCrl'
  })
  .state('sign.signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupClr'
  })    
  .state('home', {
    abstract: true,
    url: '/home',
    templateUrl: 'home.html'
    
  })
  .state('home.profile', {
    url: '',
    templateUrl: 'studentprofile/studentProfile.html',
    controller: 'ProfileCtrl'
  })      
  .state('home.myCases', {
    templateUrl: 'mycases/myCases.html',
    controller: 'myCasesCtrl'
  })
        .state('home.lookUp', {
          templateUrl: 'lookup/lookUp.html',
          controller: 'lookUpCtrl'
        })
        .state('home.logOut', {
          controller: 'logOutCtrl'
        })

        $httpProvider.interceptors.push('AttachTokens');
      })

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('dentisto');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

.factory('Auth', function ($http, $location, $window, $state) {

  var auth = {};
  auth.saveToken = function (token){
    $window.localStorage['dentisto'] = token;
  };

  auth.getToken = function (){
    return $window.localStorage['dentisto'];
  };
  auth.isAuth = function () {
    return !!$window.localStorage.getItem('dentisto');
  };

  auth.currentUser = function(){
    if(auth.isAuth()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.username;
    }
  };
  auth.saveType = function(type){
    $window.localStorage['type'] = type;
  };

  auth.register = function(user, config){
    return $http.post('/signup', user, config).success(function(data){
      auth.saveToken(data.token);
      auth.saveType(data.type);
      $state.go('home.profile')
    }).error(function (data, status, header, config) {
      alert(data.error);
    });
  };

  auth.logIn = function(user, config){
    return $http.post('/signin', user, config).success(function(data){
      auth.saveToken(data.token);
      auth.saveType(data.type);
      $state.go('home.profile')
    }).error(function (data, status, header, config) {
      alert(data.error);
    });
  };
  auth.logOut = function(){
    $window.localStorage.removeItem('dentisto');
    $window.localStorage.removeItem('type');
  };
  return auth;  
})
.run(function ($rootScope, $state, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $state.go('sign.login');
    }
  });
});

