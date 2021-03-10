$(document).ready(function(){

console.log('controller.js is in the building.');
const doubleFlatButton = document.querySelector("#double-flat-button");
const flatButton = document.querySelector("#flat-button");
const naturalButton = document.querySelector("#natural-button");
const sharpButton = document.querySelector("#sharp-button");
const doubleSharpButton = document.querySelector("#double-sharp-button");
let accidentalButtonsArray = [
  doubleFlatButton,
  flatButton,
  naturalButton,
  sharpButton,
  doubleSharpButton];
let accidentalValue;

function deselectAllAccidentalButtons() {
    for (let i=0; i<accidentalButtonsArray.length; i++) {
        if(accidentalButtonsArray[i].classList.contains("selected")) {
            accidentalButtonsArray[i].classList.remove("selected");
        }
    }
}

$("#double-flat-button").click(function() {
    deselectAllAccidentalButtons();
    $("#double-flat-button").addClass("selected");
    accidentalValue = 'double-flat'
});
$("#flat-button").click(function(){
    deselectAllAccidentalButtons();
    $("#flat-button").addClass("selected");
    accidentalValue = 'flat'
});
$("#natural-button").click(function(){
    deselectAllAccidentalButtons();
    $("#natural-button").addClass("selected");
    accidentalValue = 'natural'
});
$("#sharp-button").click(function(){
    deselectAllAccidentalButtons();
    $("#sharp-button").addClass("selected");
    accidentalValue = 'sharp'
});
$("#double-sharp-button").click(function(){
    deselectAllAccidentalButtons();
    $("#double-sharp-button").addClass("selected");
    accidentalValue = 'double-sharp'
});
$(".note-button").click(function(){
  console.log( $(".note-button").attr("id") );
  musicalInput( $(".note-button").attr("id") );
});
// more buttons
$("#draw-staves-button").click(function(){
  drawStaves(quan, spac, tmar);
  stavesHaveBeenDrawn = true;
});
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });
// $(".noteButton").click(function(){
//   musicalInput( $( this ).id );
// });


  }); // end jquery
