"use strict";

// const options = {
// 	name: "test",
// 	wight: 1024,
// 	height: 1024,
// 	colors: {
// 		border: "black",
// 		bg: "red"
// 	},
// 	// makeTest: function() {
// 	// 	console.log("Test");
// 	// }
// };

// options.makeTest();

// const {border} = options.colors;
// console.log(border);

// for (let key in options) {
// 	console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === "object") {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			// counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		// counter++;
// 	}
// }

// // console.log(counter); 

// console.log(Object.keys(options).length);

const opt = {
	age: 24,
	color: "white",
	pos: {
		wight: "50px",
		height: "150px",
		sinc: {
			first: "black",
			second: "white"
		},
	},
};


const {wight, height} = opt.pos;
console.log(wight, height);