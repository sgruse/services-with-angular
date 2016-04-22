const angular = require('angular')

angular.module('HomeModule', [])

  .controller('homeCtrl', function() {
    this.home = 'home'
  })

  .directive('headerDir', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<h3>All Day!</h3>'
    }
  })
