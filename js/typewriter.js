// Credits: https://codepen.io/gavra/pen/tEpzn

// set up text to print, each item in array is new line
var aText = new Array(
    "Hello,", "my name is Kyle,", "a student web developer in Halifax."
  );
  
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
    
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
      
  function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
  
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
  
    //  add | while writing
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span class='blink_me'>|</span>";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    
  
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  
    } else {
    setTimeout("typewriter()", iSpeed);
    }

    console.log(iIndex)
  
    // fade in the rest of the elements on the page
    // once the typewriter function is completed

    // get elements and set opacity to 0
    var homeBox = document.getElementById("home-box");
    var webDevText = document.getElementById("web-dev-text");
    var vancouverText = document.getElementById("vancouver-text");
    var underline = document.getElementById("underline");

    // when the typewriter ends, add class "transition"
    if(iTextPos == 15){
      homeBox.classList.add("transition");
      webDevText.classList.add("transition");
      vancouverText.classList.add("transition");
      underline.classList.add("transition");
    }
  
  }
  
  typewriter();