const inquirer = require("inquirer"); //inquirer from npm
const fs = require("fs");
const colourCheck = require("./lib/colourCheck");
const { Triangle, Circle, Rectangle } = require("./lib/shapes");

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
    choices: ["Circle", "Square", "Triangle"], //shape options
  },
  {
    //get shape colour
    type: "input", //type of input from user
    message: "Shape colour? (Use colour name or Hex) ", //prompt to user
    name: "ShapeColour", //key to user response
  },
];

var ShapeColour = "";
var colourReply = "";
function colourLogic(input) {
  //take the input colour
  colourReply = colourCheck.initalCheck(input); //send it to the checker
  if (colourReply == "Not a valid colour") {
    //if the colour is invalid, throw an error
    throw new Error("Not a valid colour, Try again");
  }
}
function shapecolour(input) {
  //take the input colour
  ShapeColour = colourCheck.initalCheck(input); //send it to the checker
  if (ShapeColour == "Not a valid colour") {
    //if the colour is invalid, throw an error
    throw new Error("Not a valid colour, Try again");
  }
}

function textdatachecker(response) {
  let text = response.LogoText;
  if (text.length > 3 || text.length == 0) {
    throw new Error(
      "Text input not valid, please try again with text of 1-3 characters."
    );
  }

  //run the colourchecker
  let Tcolour = response.TextColour;
  colourLogic(Tcolour);
  let Scolour = response.ShapeColour;
  shapecolour(Scolour);

  let Shape = response.LogoShape; //nothing to check
  switch (Shape) {
    case "Circle":
      GeneratedHTML = new Circle(text, colourReply, ShapeColour);
      break;
    case "Triangle":
      GeneratedHTML = new Triangle(text, colourReply, ShapeColour);
      break;
    case "Square":
      GeneratedHTML = new Rectangle(text, colourReply, ShapeColour);
      break;
    default:
      throw new Error("Something went wrong");
  }
  MakeFile();
}

function init() {
  //ask the question then use the data
  inquirer.prompt(questions).then((data) => {
    textdatachecker(data); //start the data checking
  });
}

const MakeFile = function () {
  fs.writeFile("./examples/logo.svg", GeneratedHTML.render(), (err) => {
    if (err) throw new Error("Error creating file");

    console.log("Generated logo.svg"); //confirmation message
  });
};

init(); //make it start when the index.js is run using npm start
