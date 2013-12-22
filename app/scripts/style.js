'use strict';

$(function () {

	function resizeDashbord() {
		$('#dashbord-view').css('height', $(window).height() - 40);
		$('#side-menu').css('height', $(window).height() - 40);
	}

	$(window).resize(function () {

		resizeDashbord();

	});

	resizeDashbord();

});