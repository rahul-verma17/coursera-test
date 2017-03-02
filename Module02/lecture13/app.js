(function() {
    "use strict";

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter) {
        $scope.stateOfEmotion = "sorry";

        $scope.sayMessage = function() {
            var msg = "He likes it very much.";
            return msg;
        };

        $scope.sayLovesMessage = function() {
            var msg = "He likes it very much.";
            msg = lovesFilter(msg);
            return msg;
        };

        $scope.getEmotion = function() {
            $scope.stateOfEmotion = "happy";
        };

    };

    function LovesFilter() {
        return function(input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function TruthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }

})();