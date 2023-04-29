'use strict';

/*
1. Чему равно а, почему?
let a = 0 || 'string';
let a = 1 && 'string';
let a = null || 25;
let a = null && 25;
let a = null || 0 || 35;
let a = null && 0 && 35;

2. Что отобразится в консоли. Почему?
12 + 14 + '12'
3 + 2 - '1'
'3' + 2 - 1
true + 2
+'10' + 1
undefined + 2
null + 5
true + undefined

3. Создать произвольную переменную, присвоить ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

4. Создать переменную и присвойте ей число.
Используя if, записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

7. Дан следующий код:

let product = {
name: “Яблоко”,
price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */

// 1
let a = 0 || 'string';
let b = 1 && 'string';
let c = null || 25;
let d = null && 25;
let e = null || 0 || 35;
let f = null && 0 && 35;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log('-------------------');

// 2
console.log(12 + 14 + '12');
console.log(3 + 2 - '1');
console.log('3' + 2 - 1);
console.log(true + 2);
console.log(+'10' + 1);
console.log(undefined + 2);
console.log(null + 5);
console.log(true + undefined);
console.log('-------------------');

// 3
let res = 'none';
if (res === 'hidden') {
	res = 'visible';
} else {
	res = 'hidden';
}
console.log(res);

console.log('-------------------');

// 4
let arg = 0;
if (arg === 0) {
	arg = 1;
} else if (arg < 0) {
	arg = 'less then zero';
} else if (arg > 10) {
	arg *= 10;
}
console.log(arg);

console.log('-------------------');

// 5
let car = {name: 'Lexus', age: 10, create: 2008, needRepair: false};
if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
} else {
	car.needRepair = false;
}
console.log(car);

console.log('-------------------');

// 6
let item = {name: 'Intel core i7', price: '100$', discount: '15%'};

if (Object.prototype.hasOwnProperty.call(item, 'discount') && !isNaN(+item.discount) && Object.prototype.hasOwnProperty.call(item, 'price') && !isNaN(+item.price)) {
	item.priceWithDiscount = Number.parseFloat(item.price) - (Number.parseFloat(item.price) * (Number.parseFloat(item.discount) / 100));
	console.log(`${item.priceWithDiscount}$`);
} else if (!Object.prototype.hasOwnProperty.call(item, 'discount')) {
	console.log(item.price);
}

console.log('-------------------');

// 7
let product = {
	name: 'Яблоко',
	price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена

if(Number.parseFloat(product.price) >= min && Number.parseFloat(product.price) <= max){
	console.log(product.name);
} else {
	console.log('Goods not found');
}