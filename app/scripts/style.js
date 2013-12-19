$(function(){

  resizeDashbord();
  $(window).resize(function() {

    resizeDashbord();
  
  });

  function resizeDashbord(){
    $("#dashbord").css("height",$(window).height()-40);
    $("#side-menu").css("height",$(window).height()-40);
  }

  var side_menu_show = true;

  $("#menu-toggle").click(function(){

  	if(side_menu_show){
  		$("#side-menu").css("margin-left","-290px");
  	}else{
  		$("#side-menu").css("margin-left","0px");
  	}

  	side_menu_show = !side_menu_show;

  });

});