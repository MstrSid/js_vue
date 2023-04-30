/*
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение
Пример вызова:
multiply(1,2,3) => результат 6 (1*2*3);
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */
'use strict';

function multiply() {
	if (arguments.length === 0) {
		return 0;
	}

	let mul = 1;
	for (let i = 0; i <= arguments.length - 1; i++) {
		mul *= arguments[i];
	}
	return mul;
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());