let app = angular.module('memeApp', ['searchApp'])

app.controller('AppController', ['$scope', ($scope) => {
    $scope.pageTitle = 'Memes Library'
}])

app.directive('search', () => {
    return {
        restrict: 'E',
        templateUrl: componentPath('search')
    }
})