console.log("Welcome!");
var selection; //The currently selected square

function selectSquare(square) {
  //Selects/saves the new color on click
  //alert("test1");
  selection = square;
  document.getElementById(selection).style.boxShadow = "50px";
  console.log(selection);
}

window.addEventListener("keydown", function (event) {
  //Listens for keystrokes
  if (event.keyCode === 77) {
    // MUSHROOM
    //Listens for m keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('images/mushroom.png')";
    document.getElementById(selection).style.backgroundSize = "cover";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("sounds/mushroom.mp3"); //Load mushroom sound
    audio.play(); //Play mushroom sound
  } else if (event.keyCode === 70) {
    // FIRE
    //listening for "f" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('images/fire.png')";
    document.getElementById(selection).style.backgroundSize = "cover";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("sounds/fire.mp3"); //Load fire sound
    audio.play(); //Play fire sound
  } else if (event.keyCode === 50) {
    // 2 FIRE
    //listening for "2" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('images/2fire.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("sounds/2_fire.mp3"); //Load 2 fire sound
    audio.play(); //Play 2 fire sound
  } else if (event.keyCode === 66) {
    // BOMB
    //listening for "b" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('images/bomb.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("sounds/bomb.mp3"); //Load bomb sound
    audio.play(); //Play bomb sound
  } else if (event.keyCode === 75) {
    // KING BOWSER
    //listening for "k" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('images/bowser.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("sounds/bowser.mp3"); //Load Bowser sound
    audio.play(); //Play bowser sound
  } else if (event.keyCode === 67) {
    // CANCEL (revert to original square)
    //listening for "c" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage = "url('')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Clears box text
  }
});
