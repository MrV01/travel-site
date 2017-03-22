// Finish web site
// Introduce mobile menu  JS in ES6 style module/class

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

// Sticky Header feature for Medium to larger screens
import StickyHeader from './modules/StickyHeader.js';

var mobileMenu = new MobileMenu();

// var revealOnScroll = new RevealOnScroll();
// attempt to reuse "fade out" effect on other items class="testimonial"
// by adding .testimonial class to the list of items.
// However what if we want slightly different fade-out effect.
// In such a case we need second object RevealOnScroll and constructor
// with parameters.

var revealOnScrollFeatires = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScrollTestimonial = new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();
