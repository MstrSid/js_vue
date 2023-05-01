/*
Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
doubleArray([1,2,3]) // [1,2,3,1,2,3]
 */

'use strict';

function doubleArray(arr) {
	return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3])); // [1,2,3,1,2,3]