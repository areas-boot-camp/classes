// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
let shout = "Shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  let animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  let animal = "Tigers"
  console.log("and " + animal + " and "); 
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
let bears = "Bears";

function sayBears() {
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
function singAlong() {
  let sing = "Sing";
  console.log(sing + ",");
  let singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();