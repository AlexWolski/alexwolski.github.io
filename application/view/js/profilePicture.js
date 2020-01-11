// Modified from https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9

$(document).ready(function(){
	$('head style[type="text/css"]').attr('type', 'text/less');
	less.refreshStyles();
	window.load = function() {
		$('.radial-progress').attr('data-progress', 100);
		$('.profile-picture').addClass('fade-in-pfp');
	}
	setTimeout(window.load);
})