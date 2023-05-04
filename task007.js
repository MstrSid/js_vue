/*
1. Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
*/
/*
2. Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
price: 10,
discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
*/
/*
3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
*/
/*
4. Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
*/
/*
5. Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
*/
/*
6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.

Для этого “позаимствуйте” метод из предыдущего объекта.
*/
/*
7. Даны объект и функция:

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
*/
/*
8. let element = {
height: 25,
getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
 */

'use strict';

// 1
const rectangle = {
	width: 5,
	height: 10,
	getSquare: function () {
		return this.width * this.height;
	},
};

console.log(rectangle.getSquare());

console.log('--------------------');

// 2
const price = {
	price: 10,
	discount: '15%',
	getPrice() {
		return this.price;
	},
	getPriceWithDiscount() {
		return this.price - (this.price * (Number.parseFloat(this.discount) / 100));
	}
};
console.log(price.getPrice()); // 10
console.log(price.getPriceWithDiscount()); // 8.5

console.log('--------------------');

// 3
const obj = {
	height: 50,
	incHeightOneStep() {
		this.height++;
		return this.height;
	}
};

console.log(obj.height);
obj.incHeightOneStep();
console.log(obj.height);

console.log('--------------------');

// 4
const numerator = {
	value: 1,
	double: function () {
		this.value *= 2;
		return this;
	},
	plusOne: function () {
		this.value++;
		return this;
	},
	minusOne: function () {
		this.value--;
		return this;
	},
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

console.log('--------------------');

// 5
const prods = {
	price: 25,
	count: 50,
	getTotalPrice() {
		return this.price * this.count;
	}
};

console.log(prods.getTotalPrice());

console.log('--------------------');

// 6
const prodsForSix = {
	price: 25,
	count: 50,
	getTotalPrice() {
		return this.price * this.count;
	}
};

const details = {
	price: 14,
	count: 40,
};

details.getTotalPrice = prodsForSix.getTotalPrice;

console.log(prodsForSix.getTotalPrice());
console.log(details.getTotalPrice());

console.log('--------------------');

// 7
const sizes = {
	width: 5,
	height: 10
};
const getSquare = function () {
	return this.width * this.height;
};
console.log(getSquare.call(sizes));

console.log('--------------------');

//8
const element = {
	height: 25,
	getHeight: function () {
		return this.height;
	}
};

const getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());