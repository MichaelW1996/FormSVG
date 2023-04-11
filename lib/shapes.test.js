const { Circle, Triangle, Rectangle } = require("./shapes");
//makes a shape, checks that it is an instance of the class it is constructed of,
//then tests the output when rendered against the expected output
describe("Circle", () => {
  test("This will create a Circle", () => {
    const circle = new Circle("TXT", "green", "black");
    expect(circle).toBeInstanceOf(Circle);
  });

  test("this should render SVG circle with the correct attributes", () => {
    const circle = new Circle("TXT", "white", "black");
    const svg = circle.render();
    expect(svg).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle  cx="150" cy="100" r="80" fill="black"/>
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="white"> TXT </text></svg>\n`
    );
  });
});

describe("Rectangle", () => {
  test("should create a rectangle", () => {
    const rectangle = new Rectangle("TXT", "white", "black");
    expect(rectangle).toBeInstanceOf(Rectangle);
  });

  test("this should render SVG rect with the correct attributes", () => {
    const rectangle = new Rectangle("TXT", "white", "black");
    const svg = rectangle.render();
    expect(svg).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect  x="50" y="50" width="200" height="170" fill="black"/>
          <text x="150" y="140" font-size="40" text-anchor="middle" fill="white"> TXT </text></svg>\n`
    );
  });
});

describe("Triangle", () => {
  test("should create a Triangle", () => {
    const triangle = new Triangle("TXT", "white", "black");
    expect(triangle).toBeInstanceOf(Triangle);
  });

  test("This should render SVG triangle with the correct attributes", () => {
    const triangle = new Triangle("TXT", "white", "black");
    const svg = triangle.render();
    expect(svg).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="125,10 200,150 50,150" style="fill: black"/>
            <text x="125" y="125" font-size="60" text-anchor="middle" fill="white"> TXT </text></svg>\n`
    );
  });
});
