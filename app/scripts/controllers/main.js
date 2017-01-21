'use strict';

/**
 * @ngdoc function
 * @name angularS3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularS3App
 */
angular.module('angularS3App')
  .controller('MainCtrl', function ($window, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
console.log('in controller');
        $scope.myFunction = function(){
        $window.location.href = 'http://www.google.com'; //You should have http here.
        };
    });
 
