import { Meteor } from 'meteor/meteor';
import '../api/tasks';
import {Reviews} from "../api/tasks";
import {reviewsData} from "../db/data";

Meteor.startup(() => {
  const data = Reviews.find({});
  const count = data.count();
  console.log('check data===');
  console.log(data.count());
  if(count == 0 ) {
    console.log('insert data');
    reviewsData.map(review => (
      Reviews.insert(review)
    ));
  }
});
