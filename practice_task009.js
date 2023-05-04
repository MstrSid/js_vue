/*
Создать функции:

- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

Имена функций должны быть как в примере!

Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
 */

'use strict';

// 1
function firstFunc(arr, fn) {
	let res = 'New value: ';
	for (let i = 0; i < arr.length; i++) {
		res += fn(arr[i]);
	}
	return res.trim();
}

function handler1(el) {
	return `${el[0].toUpperCase()}${el.substring(1)}`;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
	return `${el * 10}, `;
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
	return `${el['name']} is ${el['age']}, `;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
	return `${el.split('').reverse().join('')}, `;
}

console.log(firstFunc(['abs', '123'], handler4));