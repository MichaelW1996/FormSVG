class Shapes {
  constructor(text, tColour, cColour) {
    this.text = text; //text from user
    this.tColour = tColour; //text colour from user
    this.cColour = cColour; //generated constrast colour
  }
}

const SVGtag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

class Circle extends Shapes {
  //takes structure from shapes
  constructor(text, tColour, cColour) {
    super(text, tColour, cColour); //inherets from shapes
  }

  render() {
    //renders a circle of set size with shape colour of Contrast colour, text in text colour and the user text
    return `${SVGtag}<circle  cx="150" cy="100" r="80" fill="${this.cColour}"/>
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.tColour}"> ${this.text} </text></svg>\n`;
  }
}

class Rectangle extends Shapes {
  constructor(text, tColour, cColour) {
    super(text, tColour, cColour);
  }

  render() {
    return `${SVGtag}<rect  x="50" y="50" width="200" height="170" fill="${this.cColour}"/>
          <text x="150" y="140" font-size="40" text-anchor="middle" fill="${this.tColour}"> ${this.text} </text></svg>\n`;
  }
}

class Triangle extends Shapes {
  constructor(text, tColour, cColour) {
    super(text, tColour, cColour);
  }

  render() {
    //makes a triangle using polygon points
    return `${SVGtag}<polygon points="125,10 200,150 50,150" style="fill: ${this.cColour}"/>
            <text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.tColour}"> ${this.text} </text></svg>\n`;
  }
}

module.exports = {
  Circle,
  Rectangle,
  Triangle,
};
