/*
Зная структуру html, с помощью изученных методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в консоль.
4. первый div и все его дочерние узлы
	а) вывести все дочерние узлы в консоль
	б) вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методы, которые возвращают только элементы
 */
'use strict';

const head = document.querySelector('head'),
	body = document.querySelector('body'),
	bodyChildrens = body.children,
	firstDiv = document.querySelector('div'),
	firstDivChildrens = firstDiv.children;

console.log(head);
console.log('-----------------');
console.log(body);
console.log('-----------------');
for (let bodyChildren of bodyChildrens) {
	console.log(bodyChildren);
}
console.log('-----------------');
console.log(firstDiv);
console.log('-----------------');
for (let firstDivChildren of firstDivChildrens) {
	console.log(firstDivChildren);
}
console.log('-----------------');
for (let firstDivChildren of firstDivChildrens) {
	if (firstDivChildren !== firstDiv.firstElementChild && firstDivChildren !== firstDiv.lastElementChild) {
		console.log(firstDivChildren);
	}
}