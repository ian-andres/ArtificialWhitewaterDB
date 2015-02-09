
'use strict';

// angular.module('clientApp', ['ngRoute','ngMap'])
angular.module('clientApp', ['ngRoute','ngMap', 'smart-table'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/view/main.html',
    controller: 'MainCtrl'
  })
  .when('/dashboard', {
    templateUrl: 'js/view/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .when('/signup', {
    templateUrl: 'js/view/signup.html',
    controller: 'signupCtrl'
  })
  .when('/forgotpassword', {
    templateUrl: 'js/view/forgotpassword.html',
    controller: 'forgotpasswordCtrl'
  })
  .when('/changepassword', {
    templateUrl: 'js/view/changepassword.html',
    controller: 'changepasswordCtrl'
  })  .when('/entersite',{
    templateUrl: 'js/view/entersite.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterproject',{
    templateUrl: 'js/view/enterProject.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterrepair',{
    templateUrl: 'js/view/enterRepair.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterverification',{
    templateUrl: 'js/view/enterVerification.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterincident',{
    templateUrl: 'js/view/enterIncident.html',
    controller: 'enterdataCtrl'
  })
  .when('/map',{
    templateUrl: 'js/view/map.html',
    controller: 'mapCtrl'
  })
  .when('/query',{
    templateUrl: 'js/view/query.html',
    controller: 'queryCtrl'
  })
  .when('/enterproject/:id',{
    templateUrl: 'js/view/enterProject.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterrepair/:id',{
    templateUrl: 'js/view/enterRepair.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterproject/:id',{
    templateUrl: 'js/view/enterProject.html',
    controller: 'enterdataCtrl'
  })
  .when('/enterincident/:id',{
    templateUrl: 'js/view/enterIncident.html',
    controller: 'enterdataCtrl'
    })
    .when('/map/:lat/:lon',{
    templateUrl: 'js/view/map.html',
    controller: 'mapCtrl'
  })
});