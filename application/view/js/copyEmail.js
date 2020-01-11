// Copied from hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyEmail() {
  //Create a textarea, populate it with the email, and hide it
  const textArea = document.createElement('textarea');
  textArea.value = 'wolski.alexander.john@gmail.com';
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);

  //Copy the contents of the textarea
  textArea.select();
  document.execCommand('copy');
  //Remove the textarea from the document
  document.body.removeChild(textArea);
  
  //Display a message that the email has been copied
  const copiedPopup = document.getElementById('copied-popup');
  copiedPopup.className = 'fade-in';
  setTimeout(function(){
    sleep(1000);
    copiedPopup.className = 'fade-out';
  }, 500);

}

function sleep(ms) {
  return new Promise(function(resolve) { setTimeout(resolve, ms) });
}