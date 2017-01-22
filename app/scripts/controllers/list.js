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
    $http.get('http://54.191.47.109:9194/api/v1/list').
        then(function(response) {
console.log(response.data);
            for( var file in response.data['files']){
console.log(response.data['files'][file]);
               $scope.files.push({"file": response.data['files'][file][0], "date": response.data['files'][file][1]});}
            $scope.bucket = response.data['bucket'];
            $scope.folder = response.data['folder'];
        });
$scope.delete = function ( idx ) {
  var file_to_delete = $scope.files[idx];
  var delete_url = 'http://54.191.47.109:9194/api/v1/delete?file='+file_to_delete;
console.log('deleting file '+ file_to_delete);
console.log('with url' + delete_url);
            // have to use GET instead of DELETE because angular is weird
            $http.delete(delete_url);
    $scope.files.splice(idx, 1);
  };
});

