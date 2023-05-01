/*
Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
getArray(10); // [1,2,3,4,5,6,7,8,9,10]
 */

'use strict';

function getArray(num) {
	const arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

console.log(getArray(10));