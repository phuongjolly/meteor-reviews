import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './ReviewList.html';
import {Tasks} from "../api/task";

class ReviewListController {
  constructor($scope) {
    $scope.viewModel(this);
    this.tasks = this.getTasks();
  }

  getTasks() {
    console.log('started get tasks');
    this.helpers({
      tasks() {
        return Tasks.find({});
      }
    });
    console.log(this.tasks);
    return this.tasks;
  }

  addTask(newTask) {
    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });

    this.newTask = '';
  }
}

export default angular.module('reviewList', [
  angularMeteor
])
  .component('reviewList', {
    templateUrl: template,
    controller: ['$scope', ReviewListController]
  });