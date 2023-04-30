/*
Создать функцию, которая принимает строку и возвращает строку-перевертыш:
Примеры вызовов и результаты
reverseString('test') // "tset"
reverseString('') // ''
reverseString(null) // llun
reverseString(undefined)// denifednu
reverseString()// denifednu
 */

'use strict';

function reverseString(str) {
	return `${str}`.split('').reverse().join('');
}

console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());