/*
Найти элемент, который находится перед и после списка ul.
 */
'use script';

function getBeforeAndAfterUl(){
	const afterElem = document.querySelector('ul').nextElementSibling;
	const beforeElem = document.querySelector('ul').previousElementSibling;
	return [beforeElem, afterElem];
}

console.log(getBeforeAndAfterUl());