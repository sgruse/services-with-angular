
const angular = require('angular')

  angular.module('CountService', [])
  .factory('CounterService', function() {
    var num = 0;
    var obj = {};
    obj.countUp = function () {
      return num += 1 ;
    }
    obj.getCount = function() {
      return num;
    }
    obj.updateCount = function(count) {
      num = count
    }
    return obj;
  })
