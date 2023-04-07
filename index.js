const inquirer = require("inquirer"); //inquirer from npm
const colourCheck = require("./lib/colourCheck");

const questions = [
  {
    //get logotext
    type: "input", //type of input from user
    message: "Logo text (Max 3 characters): ", //prompt to user
    name: "LogoText", //key to user response
  },
  {
    //get Text Colour
    type: "input", //type of input from user
    message: "Text colour? (Use colour name or Hex) ", //prompt to user
    name: "TextColour", //key to user response
  },
  {
    //get shape
    type: "list", //type of input from user, a list has a set number of available responses
    message: "Select a shape: ", //prompt to user
    name: "LogoShape", //key to user response
    choices: ["Circle", "Rectangle", "Triangle"], //shape options
  },
];

function datachecker(response) {
  let text = response.LogoText;
  if (text.length <= 3 && text.length != 0) {
    console.log(`text is ${text}`);
  } else {
    //stop the checker
    return (
      console.log("error, Text input not valid, please try again") + init()
    );
  } //setup error

  let Tcolour = response.TextColour;
  //need to check if colour is valid?
  console.log(`Text colour is ${Tcolour}`);
  let Shape = response.LogoShape; //nothing to check
  console.log(`Shape is ${Shape}`);
}

function init() {
  inquirer.prompt(questions).then((data) => {
    datachecker(data);
  });
}

//run the colourchecker
function colourLogic(input) {
  var colourReply = colourCheck.initalCheck(input);
  if (colourReply != "Not a valid colour") {
    //if the colour is valid
    console.log(colourReply);
    var OppColourReply = colourCheck.colourOpposite(colourReply);
    console.log(OppColourReply);
  } else {
    //Not a colour
    console.log("Not a colour");
  }
}

colourLogic("blue");
//get the opposite
// console.log(`${colourCheck.HexCodeColour} this should be the answer`);
// init();
// console.log(`${colourCheck.testvar} Stupid things`);
