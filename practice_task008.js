/*
Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями соответсвующие указанным параметрам.

 */

'use strict';

const users = [
	{
		'_id': '5e36b779dc76fe3db02adc32',
		'balance': '$1,955.65',
		'picture': 'http://placehold.it/32x32',
		'age': 33,
		'name': 'Berg Zimmerman',
		'gender': 'male'
	},
	{
		'_id': '5e36b779d117774176f90e0b',
		'balance': '$3,776.14',
		'picture': 'http://placehold.it/32x32',
		'age': 37,
		'name': 'Deann Winters',
		'gender': 'female'
	},
	{
		'_id': '5e36b779daf6e455ec54cf45',
		'balance': '$3,424.84',
		'picture': 'http://placehold.it/32x32',
		'age': 36,
		'name': 'Kari Waters',
		'gender': 'female'
	}
];


function filterUsers(arr, key, value) {
	if (!(arr && key && value)) {
		return new Error('Error message');
	}
	const res = [];
	arr.slice(0).forEach(obj => {
		if (obj[key] === value) {
			res.push(obj);
		}
	});
	return res;
}

console.log(filterUsers(users, 'age'));
console.log(filterUsers(users, 'gender', 'male'));