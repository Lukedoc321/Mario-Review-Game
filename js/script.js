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
      "url('https://i.imgur.com/5Kefr4D.png')";
    document.getElementById(selection).style.backgroundSize = "cover";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
    var audio = new Audio("audio_file.mp3");
    audio.play(); //Mushroom sound
  } else if (event.keyCode === 70) {
    // FIRE
    //listening for "f" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('https://i.imgur.com/OKincF2.png')";
    document.getElementById(selection).style.backgroundSize = "cover";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
  } else if (event.keyCode === 50) {
    // 2 FIRE
    //listening for "2" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('https://i.imgur.com/VSNBcpl.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
  } else if (event.keyCode === 66) {
    // BOMB
    //listening for "b" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('https://i.imgur.com/mV2uGuj.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
  } else if (event.keyCode === 75) {
    // KING BOWSER
    //listening for "k" keystroke
    //console.log("Applied!");
    document.getElementById(selection).style.backgroundImage =
      "url('https://i.imgur.com/syEIgwJ.png')";
    document.getElementById(selection).style.backgroundSize = "contain";
    document.getElementById(selection).style.backgroundRepeat = "no-repeat";
    document.getElementById(selection).style.backgroundPosition = "center";
    document.getElementById(selection).innerHTML = ""; //Erases box text
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
