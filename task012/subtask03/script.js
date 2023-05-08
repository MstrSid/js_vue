/*
Получить список всех ссылок, которые не находятся внутри списка ul.
 */
'use script';

function getAllLinkNotInUl(){
	return document.querySelectorAll(':not(li) > a');
}

console.log(getAllLinkNotInUl());