class Shape {
    constructor(name) {
      this.name = name;
    }
  
    // Dummy method, to be overridden by child classes
    calculateArea() {
      throw new Error('Not implemented');
    }
  
    // Dummy method, to be overridden by child classes
    calculatePerimeter() {
      throw new Error('Not implemented');
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height, side1, side2, side3) {
      super('Triangle');
      this.base = base;
      this.height = height;
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    // Implementing the calculateArea method for Triangle
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  
    // Implementing the calculatePerimeter method for Triangle
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  // Example usage
  const myTriangle = new Triangle(8, 6, 5, 5, 6);
  
  console.log(`${myTriangle.name} - Area: ${myTriangle.calculateArea()}, Perimeter: ${myTriangle.calculatePerimeter()}`);
  