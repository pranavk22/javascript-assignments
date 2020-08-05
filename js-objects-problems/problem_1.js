// Make a Rectangle class that stores a width and a height. Make a few instances and print out the
// properties. Modify a few of the properties and print out the results again.
// Rectangle class
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

// Creating Rectangle instance
let rectOne = new Rectangle(999, 15);
let rectTwo = new Rectangle(2, 3);

// Displaying initial width
console.log('Width: ' + rectOne.width);
// Updating Width
rectOne.width = 12;
console.log('Updated Width: ' + rectOne.width);
console.log('Execution Completed');
