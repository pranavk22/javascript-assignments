// Recent JavaScript versions added the “map” method of arrays, as we saw in the notes and used in
// the previous set of exercises. But, in earlier JavaScript versions, you had to write it yourself. Make
// a function called “map” that takes an array and a function, and returns a new array that is the result
// of calling the function on each element of the input array. Don’t use map, filter, or reduce.
// map([1, 2, 3, 4, 5], square); --> [1, 4, 9, 16, 25]
// map([1, 4, 9, 16, 25], Math.sqrt); --> [1, 2, 3, 4, 5]
// Hint: remember the push method of arrays.

map = (array, fn) => array.map(fn)
function square(x) { return(x*x); }

// Output
console.log(map([1, 4, 9, 16, 25], Math.sqrt));
console.log(map([1, 4, 9, 16, 25], square));
