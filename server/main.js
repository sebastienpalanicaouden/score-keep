import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';

Meteor.startup(() => {

});



//Object spread operator
let user = {
  name: 'Andrew',
  location: 'Philadelphia',
  age: 25
}

let person = {
  ...user,
  age: 0
};

// console.log(person);

//Object Property Shorthand
let bike = 'Scott';
let stuff = {
  bike,
  laptop: 'Mac'
};

// console.log(stuff);

let house = {
  bedrooms: 2,
  bathrooms: 1.5
};

let yearBuilt = 1995;

let newObject = {
  ...house,
  bedrooms: 3,
  yearBuilt,
  flooring: 'Carpet'
};

// console.log(newObject);
