(function(){
    'use strict'

    let appMd = angular.module('LunchCheck',[]);

    appMd.controller('LunchCheckController',lunchController);

    lunchController.$inject = ['$scope'];

    function lunchController($scope){
        $scope.lunchResult = '';
        $scope.lunchInput = '';
        $scope.resultColor = '';

        $scope.checkLunch = function(){
            if(isEmpty($scope.lunchInput)){
                $scope.lunchResult = "Please Enter Data First";
                $scope.resultColor = 'red';
                return;
            }

            let lunches = $scope.lunchInput.split(',');
            let lunchCount = 0;
            for(let i = 0; i < lunches.length; i++){
                if(!isEmpty(lunches[i].trim()))
                    lunchCount++;
            }
            $scope.resultColor = 'green';
            if(lunchCount > 3)
                $scope.lunchResult = 'Too much!';
            else
                $scope.lunchResult = 'Enjoy!';
        }
    
        function isEmpty(str) {
            return (!str || 0 === str.length);
        }
    
    }

})();