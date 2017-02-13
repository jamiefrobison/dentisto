var dentistoApp = angular.module('dentistoApp', 
	['ui.router', 'dentisto.studentProfile', 'dentisto.studentLookup']);



dentistoApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.
    when('', '/signinup')
    .otherwise('/home');
    
   $stateProvider
        
        .state('signup', {
            url: '/signinup',
            templateUrl: 'signinup.html'
            
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
            
        })
        .state('home.profile', {
            templateUrl: 'studentProfile.html',
            controller: 'studentProfileCtrl'
        })
        
        .state('home.myCases', {
            template: 'should be replaced with myCases template'
        })
        .state('home.lookUp', {
            templateUrl: 'lookUp.html',
            controller: 'lookUpCtrl'
        })
        
})

.factory('Auth', function ($http, $location, $window) {

    var auth = {};
    auth.saveToken = function (token){
      $window.localStorage['flapper-news-token'] = token;
    };

    auth.getToken = function (){
      return $window.localStorage['flapper-news-token'];
    };

    auth.isLoggedIn = function(){
      var token = auth.getToken();

      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    auth.currentUser = function(){
      if(auth.isLoggedIn()){
        var token = auth.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return payload.username;
      }
    };

    auth.register = function(user){
      return $http.post('/register', user).success(function(data){
      auth.saveToken(data.token);
    });
    }

    auth.logIn = function(user){
      return $http.post('/login', user).success(function(data){
      auth.saveToken(data.token);
    });
};
    auth.logOut = function(){
        $window.localStorage.removeItem('flapper-news-token');
      };



    return auth;  
  })

  