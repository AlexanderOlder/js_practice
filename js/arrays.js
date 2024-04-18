"use strict";

const arr = [1, 22, 13, 64, 8];
arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(";"));

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr){
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.reverse();
// arr.splice(1, 3, 4, 5, 7);
// console.log(arr);

// arr.pop();
// arr.push(10);

console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }