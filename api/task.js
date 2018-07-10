import {Mongo} from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

export function initData() {
  if(Tasks === null) {

  }
}