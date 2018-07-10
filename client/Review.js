import angularMeteor from "angular-meteor";
import angular from "angular";
import template from './Review.html';

class ReviewController {
  constructor($scope){
    $scope.viewModel(this);
    console.log('do nothing');
  }
}

export default angular.module('review', [
  angularMeteor
])
  .component('review', {
    templateUrl: template,
    controller: ['$scope', ReviewController]
  });