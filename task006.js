/*
1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.

2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

6. Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
 */

'use strict';

// 1
let str = 'i am in the easycode';
const arr = str.split(' ');
for (let i = 0; i < arr.length; i++) {
	arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1, arr[i].length)}`;
}
str = arr.join(' ');
console.log(str);

// 2
let strTwo = 'tseb eht ma i';
let temp = '';
for (let i = strTwo.length - 1; i >= 0; i--) {
	temp += strTwo[i];
}
strTwo = temp;
console.log(strTwo);

// 3
let f = 10;
for (let i = f - 1; i > 0; i--) {
	f *= i;
}
console.log(f);

// 4
let strThree = 'JavaScript is a pretty good language';
const arrThree = strThree.split(' ');
for (let i = 0; i < arrThree.length; i++) {
	arrThree[i] = `${arrThree[i].charAt(0).toUpperCase()}${arrThree[i].slice(1, arrThree[i].length)}`;
}
strThree = arrThree.join('');
console.log(strThree);

// 5
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const resNums = [];
for (const num of nums) {
	if (num % 2 !== 0) {
		resNums.push(num);
	}
}
console.log(resNums);

// 6
let list = {
	name: 'denis',
	work: 'easycode',
	age: 29
};

for (const listKey in list) {
	const value = list[listKey];
	list[listKey] = typeof value === 'string' ? value.toUpperCase() : value;
}
console.log(list);