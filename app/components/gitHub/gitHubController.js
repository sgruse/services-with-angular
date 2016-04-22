'use strict';

const angular = require('angular');
require('./gitHubService')

(function() {
  angular.module('GitHubModule', ['myApp.services'])

  .controller('ServiceController', ['$scope', '$timeout', 'githubService', function($scope, $timeout, githubService) {

    var timeout;
    $scope.$watch('username', function(newVal){
      if(newVal) {
        if(timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          githubService.events(newVal)
          .success(function(data, status, headers) {
            $scope.events = data.data;
          })
        }, 350)
      }
    })
}])

})();
