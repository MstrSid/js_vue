/*
Дана строка: let string = "some test string";
ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

Вопросы к этому заданию
1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
 */

'use strict';

//1
let str = 'some test string';

let firstLetter = str[0];
let lastLetter = str[str.length-1];

console.log(firstLetter);
console.log(lastLetter);

//2
firstLetter = firstLetter.toUpperCase();
lastLetter = lastLetter.toUpperCase();
str = `${firstLetter}${str.slice(1, str.indexOf(lastLetter))}${lastLetter}`;
console.log(str);

//3
str = str.toLowerCase();
const startPosition = str.search('string');
const endPosition = startPosition+'string'.length-1;
console.log(startPosition);
console.log(endPosition);

//4
const secondSpacePos = str.indexOf(' ', str.indexOf(' ')+1);
console.log(secondSpacePos);

//5
const sub = str.substr(5,4);
console.log(sub);

//6
const sub2 = str.substring(5,9);
console.log(sub2);

//7
const newStr = str.slice(0,-6);
console.log(newStr);

//8
const a = 20;
const b = 16;
const string = `${a}${b}`;
console.log(string);
