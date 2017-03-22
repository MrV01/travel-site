// Module StickyHeader
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
              // Lib does not have main
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    // alert('StickyHeader :  I am here !!! ');
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    // feature of sticky header: Highlight Current Page Section
    this.pageSections = $(".page-section"); // all CSS class="page-section"
    this.headerLinks = $(".primary-nav a"); // list of all primary-nav elements  anchors
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  // Smooth Scroll  npm package: npm install jquery-smooth-scroll --save

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
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

  // Current page section Highlight feature

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function( direction ) {
          if(direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // Remove class="is-current-link" from the other Page sections first
            that.headerLinks.removeClass("is-current-link");
            // Add class="is-current-link" to the active section
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"  // by  default 0% - top of the window
      });

      new Waypoint( {   // Scrolling up waypoints
        element: currentPageSection,
        handler: function( direction ){
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // Remove class="is-current-link" from the other Page sections first
            that.headerLinks.removeClass("is-current-link");
            // Add class="is-current-link" to the active section
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-41%"  // by  default 0% - top of the window
      });

    });

  } // class

}

export default StickyHeader;
