

//  We think, that we need jQuery in the App.js right away.
// Just  do :  npm install jquery --save
// and 'require it in the webpack as shown below.
// Drawback:  ~10,000 lines of jQuery code are injected into the App.js bundle.
//     use the feaure responsively :-(
// Webpack  also supports  'import   ... from ...' Node ES6 statement
//
var $  = require('jquery');
// NodeJS way:
// var Person = require("./modules/Person");
// ES6 way of import
import Person from './modules/Person'; 
// ES6 subclass definition
class Adult extends Person {
   payTaxes() {
     var taxAmount = `${this.name} now ows $0.00 in taxes. `;
     return taxAmount;
   }
}

// alert("this is a DEFINITE test for our webpack automation!!!!");

var john = new Person("John Doe", "blue");
var jane = new Adult("Jane Swiss", "green");

$("h1").after("<p>" + john.greet() + "</p>"  + "<p>" +  jane.greet() + " </br> " + jane.payTaxes() + "</p>"  )
            .css({ 'color': 'red', 'font-size': '150%'  });
$("p").first().css({ 'background-color': 'yellow', 'font-size': '200%'  });
$("p").last().css({ 'color': 'green',  'background-color': 'pink', 'font-size': '300%' });
