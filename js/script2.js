"use strict";

// let num = 5;

// for (let i = 1; i <= 9; i++) {
// 	console.log(i);
// 	num++;
// }

// let result = "";
// const length = 6;

// for (let i = 1; i <= length; i++) {
	
// 	for (let j = 0; j < i; j++) {
// 		result += "* ";
// 	}

// 	result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level:${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level:${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level:${k}`);
// 		}
// 	}
// }

// 1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// let num = 5;

// for(let i = 1; i < 7; i++) {
// 	console.log (num);
// 	num++;
// }

// 2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// let num = 20;

// for(let i = 0; i < 11; i++) {
// 	console.log (num);
// 	num--;
// 	if (num === 13)
// 		break;
// }

// 3) При помощи цикла for выведите чётные числа от 2 до 10 включительно

// let num = 1;

// for(let i = 0; i < 9; i++) {
// 	num++;
// 	if (num%2 === 0)
// 		console.log (num);
// }

// 4) Перепишите цикл for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 
// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// let i = 3;

// while (i <= 16) {
// 	console.log(i);
// 	if (i % 2 != 0) {
// 		i++;
// 	}
// 	i++;
// }

// 5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
// 	arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;