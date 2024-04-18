"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]); //работает только в браузере

const solder = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log("Hello");
	}
};

const john = Object.create(solder);

// const john = {
// 	health: 100
// };

// john.__proto__ = solder; //этим уже не пользуются
// Object.setPrototypeOf(john, solder); //пользуются вот таким способом записи

// console.log(john.armor);
john.sayHello();