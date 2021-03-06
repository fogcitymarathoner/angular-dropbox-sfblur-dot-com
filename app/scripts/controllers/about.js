'use strict';

/**
 * @ngdoc function
 * @name angularS3App.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularS3App
 */
angular.module('angularS3App')
    .controller('AboutCtrl', function ($scope, $http) {
        $scope.files = [];
        //$http.get('http://s3.sfblur.com/api/v1/list').then(function (response) {
        $http.get('http://s3.sfblur.com/api/v1/list').then(function (response) {
            console.log(response.data);
            var total_use = 0;
            for (var file in response.data['files']) {
                console.log(response.data['files'][file]);
                $scope.files.push({"file": response.data['files'][file][0], "date": response.data['files'][file][1]});
                total_use = total_use + response.data['files'][file][2]
            }
            $scope.bucket = response.data['bucket'];
            $scope.folder = response.data['folder'];
            $scope.backend_url = 'http://s3.sfblur.com/';
            $scope.total_use = total_use;
        });
    });

