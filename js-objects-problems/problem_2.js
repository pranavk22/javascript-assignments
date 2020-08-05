// Add a getArea method. Use the prototype property.
// Modify problem 1
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

// Creating Rectangle instance
let rectOne = new Rectangle(999, 15);
rectOne.height = 999
let rectTwo = new Rectangle(2, 3);


// Calling prototype
console.log('Area of Rectangle one: ' + rectOne.area);

