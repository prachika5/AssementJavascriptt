//Write a code to Remove the spaces found in a string
const removeSpaces = (str) => str.replace(/\s/g, '');
const stringWithSpaces = 'Hello, world!';
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); 