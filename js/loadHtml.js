function loadNavbar(divID) {
  var xmlReq= new XMLHttpRequest();

  xmlReq.onreadystatechange = function() {
    if (this.readyState !== 4)
      return;

  	//Add the html file to the specified div
    document.getElementById(divID).innerHTML = this.responseText;
    //Get the current page from the url
    var page = location.pathname.split('/').slice(-1)

    //Get a collection of the nav linkCollection
    var linkCollection = document.getElementById('nav-link-container').children;

    //Loop through the children of the nav links object
    for (var i = 0; i < linkCollection.length; i++) {
    	//Get the grandchildren of the nav link object
    	var link = linkCollection[i].children[0];

    	//Apply the appropriate styling
    	if(link.id !== String(page))
      {
    		link.classList.add('nav-unselected');
        link.style.color = "white";
      }
    	else
    		link.classList.add('nav-selected');
    }

    if(String(page)) {
    	const selectedNavItem = document.getElementById(String(page));
    }
  }
  
  xmlReq.open('GET', 'navbar.html', true);
  xmlReq.send();
}

function loadFooter(divID) {
  var xmlReq= new XMLHttpRequest();

  xmlReq.onreadystatechange = function() {
    if (this.readyState !== 4)
      return;

    //Add the html file to the specified div
    document.getElementById(divID).innerHTML = this.responseText;
  }
  
  xmlReq.open('GET', 'footer.html', true);
  xmlReq.send();
}