(function(){
  'use strict';

  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope){
      $scope.name="Rahul";
      $scope.sayHello = function(){
          return "Hello Coursera";
      };
  });


})();
