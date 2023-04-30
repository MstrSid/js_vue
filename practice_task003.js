/*
Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText("hello") // “104 101 108 108 111”
подсказка: в решении задачи вам помогут методы charCodeAt и trim
 */

'use strict';

function getCodeStringFromText(str) {
	const tmp = `${str}`;
	let res = '';
	for (let i = 0; i <= tmp.length-1; i++){
		res += `${tmp.charCodeAt(i)} `;
	}
	return res.trim();
}

console.log(getCodeStringFromText('hello'));