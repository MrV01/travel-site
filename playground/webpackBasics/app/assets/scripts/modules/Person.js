// Contains module Person . For webpack assembly.
// Lets use some  ES6 to engage Babel-webpack-loader
//
class Person {
  constructor( fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
  var grt = `Hi There my name is  ${ this.name} , my favorite color is ${this.favoriteColor}`;
  console.log(grt);
  return grt;
  }
}

// function Person(fullName, favoriteColor) {
//   this.name = fullName;
//   this.color = favoriteColor;
//   this.greet = function () {
//      var greet  = "Hi I am " + fullName + " my favorite color is " + favoriteColor;
//      console.log(greet);
//      return greet;
//   };
// };
// NodeJS  way of exports
// module.exports = Person;
// ES6 way of  module exports
export default Person;
