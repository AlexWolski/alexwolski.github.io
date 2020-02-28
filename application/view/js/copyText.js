//Code from hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyText(text, popupID) {
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
  
  //A popup saying the email has been copied
  const copiedPopup = document.getElementById(popupID);
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
