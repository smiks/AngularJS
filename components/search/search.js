let searchApp = angular.module('searchApp', [])

searchApp.service("dataService", function($http) {
    this.searchMemes = (data) => {
        return $http.post(GET_MEMES_URL, data)
    }
})

searchApp.controller('SearchController', ['$scope', 'dataService', ($scope, dataService) => {
    $scope.form = {}
    $scope.memes = {}
    $scope.memesCount = 0

    $scope.searchMemes = () => {
        searchMemesPromise = dataService.searchMemes({keywords:$scope.form.keywords, key: ENDPOINT_KEY})
        searchMemesPromise.then((resp) => {
            $scope.memes = resp.data
            $scope.memesCount = Object.keys(resp.data.memes).length
        })
    }

}])


searchApp.directive('meme', () => {
    return {
        restrict: 'E',
        templateUrl: componentPath('meme')
    }
})