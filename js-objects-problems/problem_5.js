// Try reading the middleName property from your variable above. Try assigning to the middleName
// property. Try reading the property again after you assign to it. Is this behavior a good thing or a bad
// thing?

let person = {
    firstName: 'Pranav',
    lastName: 'Karmarkar'
}

console.log(person.middleName);
person.middleName = 'Suhas'

console.log(person.middleName);

// Explanation: 
// This behaviour is a weakly typed language behaviour
// The advantage claimed of weak typing is that it requires less effort 
// on the part of the programmer than strong typing, because the compiler 
// or interpreter implicitly performs certain kinds of conversions
