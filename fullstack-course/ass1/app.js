(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope){
    $scope.Check = function(){
        var input = $scope.foodlist;
        if (input == null || input == '')
        {
            $scope.outputMessage = "Please enter data first";
        }
        else
        {
            var itemCount = input.split(';');
            if (itemCount.length > 3)
            {
                $scope.outputMessage = "Too much!";
            }
            else
            {
                $scope.outputMessage = "Enjoy!"
            }
        }
    }
});

})();