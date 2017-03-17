// Person JS module

// Constructor
function Person(fullName, favoriteColor) {
  this.name = fullName;
  this.favoriteColor = favoriteColor;
  this.greet = function() {
    console.log("Hello, my name is " + this.name +
    " my favorite color is " + this.favoriteColor);
  }
}

// Exports of the module is just one constructor
// Where module is parent of exports
module.exports = Person;
// Exports complex object instead of just a constructor function
/* module.exports = {
   name: "I am a property called name",
   functionality: function() {
      alert("I am alert function");
   }
} */
