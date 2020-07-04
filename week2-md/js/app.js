(function(){
    'use strict'

    angular.module('Wk2App',[]).controller('Wk2Controller', Wk2Controller);

    // Pass in the filter service
    // for the ability to use it
    // due to the nature of javascript
    // the setTimeout() functions requires 
    // the use of $digest/$apply for it to work
    // in an angularJS context, but alternatively
    // angularJS already provides a native service
    // as $timeout
    Wk2Controller.$inject = ['$scope','$filter','$timeout'];

    function Wk2Controller($scope, $filter, $timeout){
        // You can use the $filter service with the following syntax:
        // let a = $filter(*filtertype*)[(options)](value)
        // Alternatively: you can also use filters on the HTML side
        // with syntax:
        // {{varname | filterType [: option1 : option2]}}
        $scope.header = $filter('lowercase')('GREETINGS');
        $scope.btnResult = '';
        $scope.totalPrice = 0;

        $scope.itemAmount = [0,0,0,0,0,0];
        $scope.price = getRandomPrices();
        function getRandomPrices(){
            let price = [];
            for(let i = 0; i < 6; i++){
                price.push((Math.random()*1000));
            }
            
            return price;
        }

        $scope.checkOut = function(){
            // $timeout(function,miliseconds)
            // functions is executed after miliseconds
            console.log('checkout1');
            let ld 
            = document.
            getElementById('loading-circle');

            ld.classList.add('rotate360inf');
            ld.classList.remove('opa0');
            console.log('tp:' + $scope.totalPrice);
            if($scope.totalPrice > 0){
                console.log('succ');
                $scope.btnResult = 'successful';
            } else {
                console.log('unsucc');
                $scope.btnResult = 'unsuccessful';
            }
                $timeout(function(){
                    console.log('checkout');
                    $scope.itemAmount = [0,0,0,0,0,0];
                    let foodItems = document.getElementsByClassName('food-item-count');
                    for(let i = 0; i < 6; i ++)
                        foodItems[i].classList.add('hide-item');
    
                    $scope.totalPrice = 0;
    
                    let ld = document.getElementById('loading-circle');
                    ld.classList.remove('rotate360inf');
                    ld.classList.add('opa0');
    
                    let btnscc = document.getElementsByClassName('btn-success')[0];
                    
                    btnscc.classList.add('anim-fade-in');
    
                },
                    1000);
                $timeout(function(){
                    let btnscc = document.getElementsByClassName('btn-success')[0];
                    
                    btnscc.classList.remove('anim-fade-in');
                },3000);
            }
    
            $scope.addItem = function(itemIndex){
                $scope.totalPrice += $scope.price[itemIndex];
                $scope.itemAmount[itemIndex] += 1;
                document.getElementsByClassName("food-item-count")[itemIndex].classList.remove('hide-item');
            };
            
            
    }
})();