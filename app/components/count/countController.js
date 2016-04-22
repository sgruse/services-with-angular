const angular = require('angular');

require('./countControllerService');

(function() {
  angular.module('CountModule', ['CountService'])

  .directive('counterDiv', function() {
    return {
      restrict: 'E',
      templateUrl: './app/components/count/countControllerView.html'
    }
  })

  .controller('CounterController', function($scope, CounterService) {
    $scope.number = CounterService.getCount();
    $scope.countNumber = function() {
      CounterService.countUp();
      $scope.number = CounterService.getCount();
    }
  })

  .controller('ShowController', function($scope, CounterService) {
    $scope.number = CounterService.getCount();
    $scope.countTwo = function() {
      CounterService.countUp();
      $scope.number = CounterService.getCount();
    }
    $scope.$watch(function() {
      return CounterService.getCount()
    },
    function (newVal, oldVal) {
      if (newVal !== oldVal) $scope.number = newVal;
    })
})
})()
