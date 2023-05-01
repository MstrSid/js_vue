/*
Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);
 */

'use strict';

function changeCollection(...arrays) {
	const res = [];
	for (let arr of arrays) {
		if (Array.isArray(arr)) {
			res.push(arr.slice(1));
		}
	}
	return res;
}

console.log(changeCollection([1, 2, 3]));
console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));