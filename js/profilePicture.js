// Modified from https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9

// Fade the profile picture in and trigger the circle animation
$(document).ready(function() {
  $('head style[type="text/css"]').attr('type', 'text/css');

  window.load = function() {
    $('.radial-progress').attr('data-progress', 100);
    $('.profile-picture').addClass('fade-in-pfp');
    resizeProfilePicture();
  }

  setTimeout(window.load);
})

//Resize the profile picture when the window resizes
window.onresize = resizeProfilePicture;

//Resize the profile picture based on the screen width
function resizeProfilePicture() {
  //The min and max screen widths where the profile picture will scale
  const minWindowWidth = 200;
  const maxWindowWidth = 1470;
  //The widths of the profile picture above and below the scalable range
  const minPfpWidth = 190;
  const maxPfpWidth = 420;
  //The min and max widths of the profile picture while in the scalable range
  const minScaleWidth = 190;
  const maxScaleWidth = 500;

  var winWidth = $(window).width();

  //If the screen width is above the scalable range, default to the max width
  if(winWidth > maxWindowWidth) {
    $('.radial-progress').width(maxPfpWidth).height(maxPfpWidth);
  }
  //If the screen width is below the scalable range, default to the min width
  else if(winWidth < minWindowWidth) {
  	$('.radial-progress').width(minPfpWidth).height(minPfpWidth);
  }
  //Otherwise, interpolate the width of the profile picture based on the screen width
  else {
  	var screenWidthPercent = (winWidth - minWindowWidth)/(maxWindowWidth - minWindowWidth);
  	var pfpWidth = (screenWidthPercent * (maxScaleWidth - minScaleWidth)) + minScaleWidth;

    $('.radial-progress').width(pfpWidth).height(pfpWidth);
  }
}