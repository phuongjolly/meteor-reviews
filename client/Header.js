import angularMeteor from "angular-meteor";
import angular from "angular";
import template from './Header.html';
import './Header.css';

class HeaderController {
  constructor($scope) {
    $scope.viewModel(this);
    console.log('do nothing');
  }
}

export default angular.module('mainHeader', [
  angularMeteor
])
  .component('mainHeader', {
    templateUrl: template,
    controller: ['$scope', HeaderController]
  });