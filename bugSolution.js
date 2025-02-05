function foo(a, b) {
  // Check if any parameter is null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    //Handle null or undefined parameters
    //Option 1: Throw an error
    throw new Error('Parameters cannot be null or undefined'); 
    //Option 2: Return a default value
    //return 0;
  }

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Throws an error
console.log(foo(null, 2)); // Throws an error