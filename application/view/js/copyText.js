//Code from hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyText(text, popupID, displacementY) {
  //Create a textarea, populate it with the email, and hide it
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);

  //Copy the contents of the textarea
  textArea.select();
  document.execCommand('copy');
  //Remove the textarea from the document
  document.body.removeChild(textArea);
  
  //Get the popup element saying the email has been copied
  const copiedPopup = document.getElementById(popupID);
  //Position the popup above its parent
  positionPopup(copiedPopup, displacementY);
  //Toggle the animation on the popup
  togglePopupAnimation(copiedPopup);
}

//Translate the element to be centered horizontally with and above its parent
function positionPopup(copiedPopup, displacementY) {
  //Find the parent element of the popup
  const popupParent = copiedPopup.parentElement;

  //Calculate the translation needed to center the element
  var translateX = (popupParent.offsetWidth - 80)/2;
  var translateY = popupParent.offsetHeight + displacementY;

  //Remove the padding from the translation
  var computedStyle = getComputedStyle(popupParent);
  translateX -= (parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight))/2;
  translateY -= (parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom))/2;

  copiedPopup.style.transform = "translate(" + translateX + "px, -" + translateY + "px)";
}

//Change the class of the popup element to fade in and back out
function togglePopupAnimation(copiedPopup) {
  //When the page first loads, the popup is invisible. So make sure its visible
  copiedPopup.style.display = 'block';
  //Toggle the animation of the popup fading in
  copiedPopup.className = 'fade-in copied-popup';

  //After a set delay, fade the popup out
  setTimeout(function(){
    sleep(1000);
    copiedPopup.className = 'fade-out copied-popup';
  }, 500);
}

function sleep(ms) {
  return new Promise(function(resolve) { setTimeout(resolve, ms) });
}