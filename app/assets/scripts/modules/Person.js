// Person JS module. Now try to use some ES6 to test babel.

class Person {
  constructor(fullName, favoriteColor ){
    this.name = fullName;
    this.favoriteColor = favoriteColor;
  }
  greet() {
    console.log("Hi there, my name is " + this.name +
    " my favorite color is " + this.favoriteColor);
  }
}
// ES6 way to export from a module
export default Person;

// Exports of the module is just one constructor
// Where module is parent of exports
// Node JS way to export from a module

// module.exports = Person;
// Exports complex object instead of just a constructor function
/* module.exports = {
   name: "I am a property called name",
   functionality: function() {
      alert("I am alert function");
   }
} */
