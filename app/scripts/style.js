'use strict';

$(function () {

	function resizeDashbord() {
		$('#dashbord-view').css('height', $(window).height() - 40);
		$('#side-menu').css('height', ($(window).height() - 40)>400 ? $(window).height() - 40 : 450);
	}

	$(window).resize(function () {

		resizeDashbord();

	});

	resizeDashbord();

});