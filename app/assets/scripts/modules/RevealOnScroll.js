import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // Lib does not have main

// Dependencies
// 1. jquery
// 2. JS lib to deal with page scroll:
//        npm install waypoints --save

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = $(".feature-item");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
  createWaypoints() {
    this.itemsToReveal.each( function() {
       // alert("testing waypoints");
       var currentItem = this; // current DOM element, looping through .each()
       new Waypoint( {
         element: currentItem,
         handler: function() {
           $(currentItem).addClass("reveal-item--is-visible");
         },   // Waypoint triggered when invisible item hits top of browser window
              // while scrolling
         offset: "85%"  // Offset from top of the window to trigger the Waypoint
       });
    });
  }
}

export default RevealOnScroll;
