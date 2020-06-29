/* ()() creates an IIFE
An Immediately-invoked Function Expression
is a way to execute functions immediately, 
as soon as they are created.

IIFEs don’t pollute the global object, 
and they are a simple way to 
isolate variables declarations.
Preventing bleeding into local scope
*/

// TIP FOR HTML: you can use the *elem*.getAttribute(attrName)
// to get the value of any attrName (if it exsists, else return null)
// from any *elem* , works for both standard and non-standard attributes

(function(){
    // Prevent careless mistakes
    // i.e: making a statement without variable declaration
    'use strict';

    // Declare new Module named firstApp
    // with the array of dependencies
    // [] is empty
    // after that, you can add 
    // the ng-app attribute to tags in HTML
    // to bind the module to that tag
    // and its content
    let appModule = angular.module('firstApp', []);

    // Define the VIEWMODEL of the module
    // with the name firstController
    // after that, the ng-controller attribute
    // will bind the corresponding controller
    // to calling tags

    // Angular provides a special object for passing
    // from VIEWMODEL to VIEW called $scope
    // NOTE: Variable with $ at start are reserved for AngularJS
    
    // $scope's variable/methods
    // will be able to be called in HTML via expressions
    // NOTE: for method, () is compulsory in HTML 
    // else it returns whole function dec as String
    // i.e: $scope.abc ="123"; will make a variable abc valued "123" in $scope
    // and {{abc}} will call that variable abc provided its in the controller scope

    // Expression and Interpolation
    // Expressions are variable/methods in double curly brackets
    // tied to surrounding scope
    // i.e: {{name}}, {{sayHi()}}
    // Interpolation is changing expression to its corresponding value
    // ex: 
    // <div> say hi {{name}} </div>
    // name will have the value of "Will"
    // Interpolation on Expression will result in:
    // <div> say hi Will </div> 
    // NOTE: if an expression cannot find its value
    // it'll interpolate to an empty string

    // $filter is similar to $scope but is used for
    // formatting data for VIEW

    // VIEWMODEL variable/method can also be binded 
    // to input field value via the ng-model attribute
    // and passing the variable/method name
    appModule.controller('firstController',myController);
    // You can pass services in in the controller (inline)
    // so as to prevent them from minification error
    // i.e: appModule.controller('firstController',['$scope','$filter',myController]);
    // But you can also inject them on newline for readability
    myController.$inject = ['$scope','$filter'];

    function myController($scope, $filter) {
        $scope.name = "bob";
        $scope.glassImg = 'water.jpg';
        $scope.nameValue = calculateStringNumericValue($scope.name);

        // These function are called via directives in HTML tags
        // other directives: 
        // ng-keypress: trigger each key presses
        // ng-keydown: trigger only when key is down
        // ng-click: trigger each click 
        // ng-blur: trigger when  unfocuesd
        $scope.calculateName = function(){
            $scope.nameValue = calculateStringNumericValue($scope.name);
        }

        $scope.greet = function(){
            return "greetings";
        };

        $scope.upper = function(){
            let upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };


        // for img, if you add ng- before src, it'll
        // only read once angular is done interpolating
        // instead of src being read before interpolation
        $scope.winify = function watetToWine(){
            $scope.glassImg = 'wine.jpg';
        }

        function calculateStringNumericValue(string){
            let totalValue = 0;
            for(let i = 0; i < string.length; i++){
                totalValue += string.charCodeAt(i);
            }
            
            return totalValue;
        }


    };

})();