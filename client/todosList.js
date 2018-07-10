import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import {Tasks} from "../api/task";

class TodosListCtrl {
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

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: template,
    controller: ['$scope', TodosListCtrl]
  });