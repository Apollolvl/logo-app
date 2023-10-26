const { Triangle, Square, Circle } = require("./shape");

describe("TriangleTest", () => {
  test("Testing for white background", () => {
    const shape = new Triangle();
    shape.setColor("white");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="white" />'
    );
  });
});


describe("SquareTest", () => {
  test("testing for red background", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="red" />'
    );
  });
});


describe("CircleTest", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("#ca00ca");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});