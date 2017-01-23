'use strict';

/**
 * @ngdoc function
 * @name angularS3App.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the angularS3App
 */
angular.module('angularS3App')
    .controller('ListCtrl', function ($scope, $http) {
        $scope.files = [];
        $http.get('http://s3.sfblur.com/api/v1/list').then(function (response) {
            console.log(response.data);
            for (var file in response.data['files']) {
                console.log(response.data['files'][file]);
                $scope.files.push({"file": response.data['files'][file][0], "date": response.data['files'][file][1]});
            }
            $scope.bucket = response.data['bucket'];
            $scope.folder = response.data['folder'];
        });
        $scope.delete = function (idx) {
            /*
            delete button call back that calls Flask REST method
             */
            var file_to_delete = $scope.files[idx]['file'];
            var delete_url = 'http://s3.sfblur.com/api/v1/delete?file=' + file_to_delete;
            console.log('Deleting file ' + file_to_delete);
            console.log('  with url' + delete_url);
            // have to use GET instead of DELETE because angular is weird
            $http.delete(delete_url);
            $scope.files.splice(idx, 1);
        };
        $scope.propertyName = 'file';
        $scope.reverse = true;

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
    });

