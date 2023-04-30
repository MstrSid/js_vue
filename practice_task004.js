/*
Создать функцию угадай число.
Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
Если переданно не число то верните ошибку return new Error("Please provide a valid number");
Далее функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”
если нет то строку “You are lose, your number is 8, the random number is 5”.  Числа в строке указаны как пример вы подставляете реальные числа.
Если переданно число в виде строки оно должно быть преобразованно к числу.
 */

'use strict';

function guessTheNumber(num) {
	const n = +num;
	if (typeof n != 'number' || Number.isNaN(n) === true) {
		return new Error('Please provide a valid number');
	}
	if (n > 10 || n < 0) {
		return new Error('Please provide number in range 0 - 10');
	}

	const rand = Math.floor(Math.random() * 10);
	return rand === n ? 'You win!' : `You are lose, your number is ${n}, the random number is ${rand}`;
}

console.log(guessTheNumber(5));