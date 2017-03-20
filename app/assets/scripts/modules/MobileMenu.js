// Programming in ES6 style

import $ from 'jquery'; // import Jquery because
                      // "Jquery still worth its weight"

class MobileMenu {
  constructor() {
    // alert("testing from MobileMenu class"); // test message
    // Please do not program like that, "Jquery spagetti" code.
    // $(".site-header__menu-icon").click(function(){
      // A - Selecting elemants from the DOM
      // B - Event handling
      // console.log("The top right colon was clicked!");
      // C - define functionality.
    // });   // According to professor, A,B,C steps scale rather bad.
    // the "JQuery Spagetti" code became unmanageble rather fast.

    // Right way to searate A, B, C into the shelfs:
    // Browser DOM selectors initiated by JQuery selectors
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");

    // Function events() below are not standard JS events,
    // those are internal events of this object
    this.events(); // run events of this object manually
  }

  // Event we are watching, they are defined by ourselves
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    // ".bind()" above is used to replace "this" default ( menuIcon HTML element)
    // in "toggleTheMenue" function call of "click" JQuery function  by
    // "this" pointing on object of MobileMenu class.
    // console.log(this);
  }

  // Action on the event(s)
  toggleTheMenu() { // run the action "Toggle the menu content" (visible/unvisible)
      // console.log("Hooray - the icon was clicked!"); // test message
      // Attention "this" variable points to object, from which method was called
      //  from! In this particular case: Jquery menuIcon object
      // console.log(this);
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }

}

// ES6 style export:
export default MobileMenu;
