/*
Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты. Обязательно проверяйте это.
 */
'use script';

function isParent(elemOne, elemTwo){
	if(!(elemOne instanceof HTMLElement && elemTwo instanceof HTMLElement)){
		return new Error('Non DOM object');
	}
	return elemTwo.parentElement === elemOne;
}

console.log(isParent(document.body.children[0], document.querySelector('article')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));