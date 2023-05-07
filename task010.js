/*
1. Создайте функцию которая бы умела делать:

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.
*/
/*
2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
*/
/*
3. Реализовать модуль, который работает со строкой и имеет методы:

a. установить строку
	i. если передано пустое значение, то установить пустую строку
	ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш

Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5
*/
/*
4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
 */

'use strict';

// 1
function minus(a = 0) {
	return function (b = 0) {
		return a - b;
	};
}

console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // -6
console.log(minus()()); // 0

console.log('----------------');

// 2
function multiplyMaker(n) {
	let _n = n;
	return function (m) {
		_n = _n * m;
		return _n;
	};

}

const multiply = multiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

console.log('----------------');

// 3
const strModule = (function () {
	let res = '';

	function setString(str = '') {
		res = String(str);
	}

	function getString() {
		return res;
	}

	function getStringLength() {
		return res.length;
	}

	function getReverseString() {
		return res.split('').reverse().join('');
	}

	return {
		setString,
		getString,
		getStringLength,
		getReverseString
	};
}());

strModule.setString(5);
console.log(strModule.getString());
console.log(strModule.getStringLength());
console.log(strModule.getReverseString());

console.log('----------------');

// 4

const calculator = (function () {
	let n = 0;

	function setNum(num = 0) {
		n = num;
		return this;
	}

	function plusNum(num = 0) {
		n += num;
		return this;
	}

	function mulNum(num = 1) {
		n *= num;
		return this;
	}

	function getNum() {
		return n.toFixed(2);
	}

	return {
		setNum,
		plusNum,
		mulNum,
		getNum
	};

}());

console.log(calculator.setNum(5).plusNum(5).mulNum(5).getNum());