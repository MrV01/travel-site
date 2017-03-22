// Module StickyHeader
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // Lib does not have main


class StickyHeader {
  constructor() {
    // alert('StickyHeader :  I am here !!! ');
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
  }

  // trigger Waypoint on the  first <h1> title
  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],  // pointer to DOM element
      handler: function( direction ) { // background color is darker when scrolling "down"
                // relative to the Waypoint, and lighter when scrolling other direction.
        if(direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

}

export default StickyHeader;
