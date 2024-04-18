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

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// function test() {
// 	for(let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 2) return;
// 	}
// 	console.log("Done");
// }
// test();

// function doNothing() {}
// console.log(doNothing());

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. 

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return. 

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
// 	return "Привет, " + name + "!";
// }
// console.log(sayHello("Антон"));

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


// function returnNeighboringNumbers (num) {
// 	return [num - 1, num, num + 1]
// }

// // return NeighboringNumbers(5);
// console.log(returnNeighboringNumbers(5));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть. 

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// function getMathResult(a, b) {
// 	for (let i = 1; i <= b; i++) {
// 		a + a;
// 	}
// }
// console.log(getMathResult(5, 3));



// let a = "ops";
// a += "--- ";

// console.log(a);

// function getMathResult(num, times) {
// 	if (typeof(times) !== "number" || times <= 0) {
// 		return num;
// 	}

// 	let str = "";

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 			// Тут без черточек в конце
// 		} else {
// 			str += `${num * i}---`;
// 			// Это тоже самое, что и
// 			// str = str + num * i + "---"
// 		}
// 	}

// 	return str;
// }

// console.log(getMathResult(10, 5));

// const test = "128qkw3251654654fhoaisfhoiasufh";
// console.log(parseInt(test));

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

//мое решение:
// function calculateVolumeAndArea(cubeEdgeLenght) {
// 	let calculateCubeVolume = cubeEdgeLenght * cubeEdgeLenght * cubeEdgeLenght;
// 	let calculateCubeArea = (cubeEdgeLenght * cubeEdgeLenght) * 6;

// 	if (!Number.isInteger(cubeEdgeLenght) || cubeEdgeLenght <= 0 || typeof(cubeEdgeLenght) == "string") {
// 		console.log ("При вычислении произошла ошибка");
// 	} else {
// 		console.log(`Объем куба: ${calculateCubeVolume}, площадь всей поверхности: ${calculateCubeArea}`);
// 	}

// }

// calculateVolumeAndArea(-15);

//решение из урока:
// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.


//мой вариант решения:
// function getCoupeNumber(placeNumber) {

// 	if (!Number.isInteger(placeNumber) || placeNumber < 0 || typeof(placeNumber) !== "number") {
// 		console.log ("Ошибка. Проверьте правильность введенного номера места");
// 	} else if (placeNumber === 0 || placeNumber > 36 ) {
// 		console.log("Таких мест в вагоне не существует");
// 	}


// }

// getCoupeNumber("Hello");

//решение из урока:
// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

//мое решение:

// function getTimeFromMinutes(minutes) {
// 	if (typeof (minutes) !== "number" || minutes < 0 || !Number.isInteger(minutes)) {
// 		return "Ошибка, проверьте данные";
// 	}

// 	let hours = Math.floor(minutes / (1000 * 3600 * 24));
// }

// console.log(getTimeFromMinutes(115));


// function learnJS(lang, callback) {
// 	callback();
// 	console.log(`Я учу: ${lang}`);
// }

// function done() {
// 	console.log("Я прошел этот урок!");
// }

// learnJS("JavaScript", done);