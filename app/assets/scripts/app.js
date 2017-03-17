// first JavaScript experience
//  How to use installed  Jquery node module
//  from the development environment instead of
//  HTML file :
//  1. Install node third party package to the project directory
//     $ npm install jquery --save
//  2. Require JQuery module in the script
//  3. webpack will bundle JQuery automatically

var $ = require('jquery');

// Node based JS functions/modules can be bundled by
// webpack tool to make a neat package, which will run in
// browser environment(s)
//
// ES5 way to import a module
// var Person = require('./modules/Person');
//ES6 way to import a module
import Person from './modules/Person';

// Play with ES6 features.
class Adult extends Person {
   payTaxes() {
     console.log(this.name + " now owes $0 in taxes");
   }
}

// When JQuery is included in the bundle:
/*  Version: webpack 2.2.1
Time: 525ms
 Asset    Size  Chunks                    Chunk Names
App.js  272 kB       0  [emitted]  [big]  main
   [0] ./app/assets/scripts/modules/Person.js 616 bytes {0} [built]
!! [1] ./~/jquery/dist/jquery.js 268 kB {0} [built]
   [2] ./app/assets/scripts/App.js 831 bytes {0} [built]
*/
// Example of JQuery use: to remove h1 elements.

alert(" Test ABC 321. This is a test of our webpack automation");

$("h1").remove();

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Doe", "red");
jane.greet();
jane.payTaxes();  // function from class Adult extends Person

var johnnyFife = new Person("Johnny Five", "Orange");
johnnyFife.greet();
