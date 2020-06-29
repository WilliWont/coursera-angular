(function(){
    'use strict'

    angular.module('Wk2App',[]).controller('Wk2Controller', Wk2Controller);

    // Pass in the filter service
    // for the ability to use it
    Wk2Controller.$inject = [$scope,$filter];

    function Wk2Controller($scope, $filter){
        // You can use the $filter service with the following syntax:
        // let a = $filter(*filtertype*)[(options)](value)
        // Alternatively: you can also use filters on the HTML side
        // with syntax:
        // {{varname | filterType [: option1 : option2]}}
        $scope.header = $filter('lowercase')('GREETINGS');

        $scope.price = getRandomPrices();
        function getRandomPrices(){
            let price = [];
            for(let i = 0; i < 6; i++){
                price.push((Math.random()*1000));
            }
            
            return price;
        }
    }
})();