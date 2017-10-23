var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function($scope) {
    $scope.data = [];
    $scope.submit = function() {
        var name = $scope.name;
        var address = $scope.address;
        $scope.data.push({ Name: name, Address: address });

        $scope.name = "";
        $scope.address = "";
    }
}]);