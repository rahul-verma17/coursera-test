(function(){
  'use strict';

// angular.module('DIApp',[])
// .controller('DIController', ['$scope', '$filter', DIController]);

angular.module('MsgApp',[])
.controller('MsgController', MsgController);


MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name="Rahul";
  $scope.stateOfEmotion = "sorry";
  $scope.sayMessage = function () {
    return "I like it.";
  };
  $scope.getEmotion = function(){
      $scope.stateOfEmotion = "happy";
  };

};


})();
