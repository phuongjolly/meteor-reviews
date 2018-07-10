import angular from 'angular';
import angularMeteor from 'angular-meteor';
import reviewList from './ReviewList';
import mainHeader from './Header';
import review from './Review';

angular.module('simple-todos', [
  angularMeteor,
  reviewList.name,
  mainHeader.name,
  review.name
]);
