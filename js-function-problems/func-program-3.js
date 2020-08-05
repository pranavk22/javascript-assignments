// Make a function called “find” that takes an array and a test function, and returns the first element of
// the array that “passes” (returns non-false for) the test. Don’t use map, filter, or reduce.
// function isEven(num) { return(num%2 == 0); }
// isEven(3) --> false
// isEven(4) --> true
// find([1, 3, 5, 4, 2], isEven); --> 4

find = (arr, test) => arr[arr.findIndex(test)]
function isEven(num) { return(num%2 == 0); }
// Output
console.log(find([1, 3, 5, 4, 2], isEven));