// 1. map() method
const arr1 = [5, 1, 3, 2, 6];

// Double = [10, 2, 6, 4, 6];
// Triple = [15, 3, 9, 6, 18];
//Binary = ['101', '1', '11', '10', '110'];

const output1 = arr1.map((a) => a * 2);
const output2 = arr1.map((a) => a * 3);
const output3 = arr1.map((a) => a * a);

console.log(output1);
console.log(output2);
console.log(output3);

// 2. reduce() method
const arr2 = [1, 2, 3, 4];

const sum = arr2.reduce((num1, num2) => {
	// console.log(num1, num2);
	return num1 + num2;
});

console.log(sum);

// 3. filter() method
const arr3 = [1, 2, 3, 4, 5, 6];

const evenNum = arr3.filter((a) => a % 2 === 0);
console.log(evenNum);
