  $(document).ready(function(){
    //jquery
console.log("js/main.js has loaded");

window.addEventListener("keydown", function(e) {
  // 37   39   38   40   32
  // <    >    ^    D    SP
  // prevent space-bar and arrow-keys from scrolling the page
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);
$(document).keypress(function(e){
  notationConsoleDotLog(`keypress = ${e.which}`);
  musicalInput(keyMap[e.which]);
});

$(document).keyup(function(e){
  notationConsoleDotLog(`keyup = ${e.which}`);
  if (e.which == 8){
    startOver();
  } else if (e.which == 38) { //up
    y -= 5;
  } else if (e.which == 39) { //right
    x += 5;
  } else if (e.which == 40) { //down
    y += 5;
  } else if (e.which == 37) { //left
    x -= 5;
  } else if (e.which == 32) { //spacebar
    notationConsoleDotLog("spacebar")
  }
  notationConsoleDotLog("x=" + x + ", y=" + y);
  updateRender();
})
var keyMap = {
  "122": "c3", "120": "d3",  "99": "e3", "118": "f3",  "98": "g3", "110": "a3", "109": "b3",
  "97": "c4", "115": "d4", "100": "e4", "102": "f4", "103": "g4", "104": "a4", "106": "b4",
  "113": "c5", "119": "d5", "101": "e5", "114": "f5", "116": "g5", "121": "a5", "117": "b5",
  "49": "r1",  "50": "r2",  "51": "r3",  "52": "r4",  "53": "r5",  "54": "r6",  "55": "r7",
  "219": "do", "221": "uo"
}
let y = 50;
let x = 15;
let quan = 12;
let spac = 100;
let tmar = 50;
var ledgerLineRadius = 8;
var scoreComponents = [];
var yValueOfNoteRelativeToMiddleLine;
var yValuesOfNotesRelativeToMiddleLine = {
  "b6": -70, "a6": -65, "g6": -60, "f6": -55, "e6": -50, "d6": -45, "c6": -40,
  "b5": -35, "a5": -30, "g5": -25, "f5": -20, "e5": -15, "d5": -10, "c5":  -5,
  "b4":   0, "a4":   5, "g4":  10, "f4":  15, "e4":  20, "d4":  25, "c4":  30,
  "b3":  35, "a3":  40, "g3":  45, "f3":  50, "e3":  55, "d3":  60, "c3":  65
}
//let displayAccidental;
let accidentalValue = 0;
console.log("accidentalValue = " + accidentalValue);
console.log("hello");

function clearCanvas() {
  ctx.fillStyle = "#eeeecc";
  ctx.fillRect(0, 0, c.width, c.height);
}
function updateCanvas() {
  resetX();
  clearCanvas();
  updateRender();
}
function updateRender() {
  for (let iii=0; iii<scoreComponents.length; iii++) {
    if (scoreComponents[iii].selected==true) {
      fillStyle = '#238fb3';
    } else {
      fillStyle = '#000000';
    }
    y = yValuesOfNotesRelativeToMiddleLine[scoreComponents[iii].name + scoreComponents[iii].octave]+tmar+20+spac*ii;
    drawNoteHead(x,y);
    drawLedgerLines(y);
    resetX();
  }
}
function setAccidentalValue(accidentalValueInput) {
  accidentalValue = accidentalValueInput;
  console.log("accidentalValue = " + accidentalValue);
}
let musicalInputValue;
function musicalInput(musicalInputCode) {
  if (musicalInputCode != undefined) {
    musicalInputValue = musicalInputCode.slice(0,2);
    scoreComponents.push(new musicNote(musicalInputValue.slice(0,1), musicalInputValue.slice(1,2), accidentalValue));
    notationConsoleDotLog('new note: ' + listOfNotes[listOfNotes.length-1]);
  } else {
    notationConsoleDotLog(`error: musicalInputCode is ${musicalInputCode}`);
  }
  if (stavesHaveBeenDrawn == true) {
    drawStaves(quan, spac, tmar);
  }
  updateCanvas();
}

// function musicalInput(musicalInputCode, accidentalValue) {

// }


//let noteHasAccidentalInKey;

//let lastOccurenceOfPitchHadSameAccidental;

// function decideAccidentalDisplay(); {
//     if (!noteHasAccidentalInKey || !lastOccurenceOfPitchHadSameAccidental) {
//       displayAccidental = true;
//     } else {
//       displayAccidental = false;
//     }
// }


function startOver() {
  clearCanvas();
  x = 15;
  scoreComponents = [];
  notationConsoleDotLog("Starting over. You just deleted everything.");
}

function resetX() {
  x += 10;
  if (x>390) {
    x = 15;
    ii += 1;
  }
}



});
