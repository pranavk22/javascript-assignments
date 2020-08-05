// Create a string that contains what looks like an object with firstName and lastName properties. Use
// “eval” to turn it into a real object, and test it the same way you did with the previous object that you
// created directly

let person = {
    firstName: 'Pranav',
    lastName: 'Karmarkar'
}

let fullName = eval("person.firstName + ' ' + person.lastName");
console.log(fullName);
console.log('Execution Complete');
