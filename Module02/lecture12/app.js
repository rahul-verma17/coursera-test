(function() {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);


    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {
        $scope.name = "Rahul";
        $scope.stateOfEmotion = "sorry";
        $scope.cookiecost = .23;
        $scope.sayMessage = function() {
            var msg = "I like it very much.";
            var output = $filter('uppercase')(msg);
            return output;
        };
        $scope.getEmotion = function() {
            $scope.stateOfEmotion = "happy";
        };

    };

})();