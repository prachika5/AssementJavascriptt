//Calculate the sum of numbers within an array
const calculateSum = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};


const numbers = [1, 22, 34, 65];
console.log(calculateSum(numbers)); 