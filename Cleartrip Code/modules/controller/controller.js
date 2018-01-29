const app = angular
  .module('pseudoApp', ['angularUtils.directives.dirPagination'])
  .controller('pseudoCtrl', pseudoCtrl);
function pseudoCtrl($scope, $http, $log) {
  $http
    .get('http://starlord.hackerearth.com/kickstarter')
    .then(function(response) {
      $scope.persons = response.data;
      console.log(response.data);
      $log.info(response);
    })
    .catch(function(error) {
      $scope.error = error;
      console.log(error);
      $log.info(error);
    });

  $scope.sort = function(keyname) {
    var foo = document.getElementsByTagName('button').innerHTML;
    localStorage.setItem(keyname, foo);
    $scope.sortBy = keyname;
    $scope.sortReverse = !$scope.sortReverse;
  };
}
