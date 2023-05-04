/*
Написать аналог метода every.
Создайте функцию every, она должна принимать первым аргументом массив чисел
(обязательно проверьте что передан массив),
а вторым аргументом callback (обязательно проверьте что передана функция).
Если передан один из аргументов не удовлетворяет условию
то функция должна вернуть new Error("с произвольным сообщением.")

Функция должна возвращать true или false в зависимости от результата
вызова callback (проверить число больше 5).
Callback должен принимать один элемент массива, его индекс в массиве и весь массив.
 */

'use strict';

function every(arr, fn) {
	if (!Array.isArray(arr)) return new Error('The first argument expected as array');
	if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

	for (let i = 0; i < arr.length; i++) {
		if (!fn(arr[i], i, arr)) {
			return false;
		}
	}

	return true;
}

console.log(every([6, 2], function (el) {
	return el > 5;
}));