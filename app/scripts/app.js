'use strict';

/**
 * @ngdoc overview
 * @name angularS3App
 * @description
 * # angularS3App
 *
 * Main module of the application.
 * exposes 2 angular applications /#!/list - small CMS and /#!/about - frontend about page
 */
angular
  .module('angularS3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider

      .when('/', {
          templateUrl: 'views/list.html',
          controller: 'ListCtrl',
          controllerAs: 'list'
      })

      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: 'e'
      });

  });
