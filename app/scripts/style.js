$(function(){

  resizeDashbord();
  $(window).resize(function() {

    resizeDashbord();
  
  });

  function resizeDashbord(){
    $("#dashbord").css("height",$(window).height()-40);
    $("#side-menu").css("height",$(window).height()-40);
  }

});