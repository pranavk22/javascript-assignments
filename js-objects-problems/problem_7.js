// Do the same with JSON.parse. You have to follow strict JSON rules in this case
let person = '{ "firstName": "Pranav", "lastName": "Karmarkar"}';
let fullName = JSON.parse(person);
console.log(fullName);
console.log('Execution Complete');