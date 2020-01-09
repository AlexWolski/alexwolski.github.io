function loadNavbar() {
  var xmlReq= new XMLHttpRequest();

  xmlReq.onreadystatechange= function() {
    if (this.readyState !== 4)
      return;

  	//Load the navbar
    document.getElementById('navbar-placeholder').innerHTML= this.responseText;
  }
  
  xmlReq.open('GET', 'navbar.html', true);
  xmlReq.send();
}