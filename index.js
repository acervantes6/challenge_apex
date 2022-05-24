/*Max Min

Task

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.

Then print the respective minimum and maximum values as a single string line of two space-separated long integers.

Constrains

    You will always receive an array of numbers
    You should return a string with two spaces separation.


Input

[15, 20, 70, 55, 8]

Output

98 160

Explanation*/


const arr = [15, 20, 70, 55, 8];
const arrMinMax = arr.sort((a, b) => a - b);
const getSum = (arr) => {
  arr.pop();
  return arr.reduce((a, b, n) => a + b);
}
console.log('Menor suma', getSum( arrMinMax.slice() ));
console.log('Mayor suma', getSum( arrMinMax.slice().reverse() ));
console.log('Arr: ', arr);
