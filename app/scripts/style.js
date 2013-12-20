"use strict";

$(function(){


  resizeDashbord();
  $(window).resize(function() {

    resizeDashbord();
  
  });

  function resizeDashbord(){
    $("#dashbord-view").css("height",$(window).height()-40);
    $("#side-menu").css("height",$(window).height()-40);
  }

});