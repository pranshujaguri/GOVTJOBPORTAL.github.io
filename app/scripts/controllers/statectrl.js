'use strict';


angular.module('myPortalApp')
  .controller('statecontrollerCtrl', function ($scope, statefactory) {
	var promise = statefactory.callserver();
           

        promise.then(function (data) {
            $scope.result = data;
            console.log($scope.result);
        }, function (error) {
            $scope.result = error;
        });
            
       
});