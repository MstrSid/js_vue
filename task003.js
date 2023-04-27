/*
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

1. Создать объект с полем product, равным ‘iphone’
2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
3. Добавить поле details, которое будет содержать объект с полями model и color
 */

'use strict';

//1
const obj = {
	product: 'iphone'
};

console.log(obj);

//2
obj.price = 1000;
obj.currency = 'dollar';

console.log(obj);

//3
obj.details = {};
obj.details.model = 13;
obj.details.color = 'red';

console.log(obj);