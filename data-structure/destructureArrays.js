

const restaurant = {
	name: 'Iron Donkey Cafe',
	location: 'Plot 6, Jivan Abji Road',
	categories: [
		'Italian',
		'Pizzeria',
		'Vegeterian',
		'Organic'
	],
	starterMenu: [
		'Focaccia',
		'Bruschetta',
		'Garlic Bread',
		'Caprese Salad'
	],
	mainMenu: [
		'Pizza',
		'Pasta',
		'Risotto'
	],
	orders: function (starterIndex, mainIndex) {
		return [
			this.starterMenu[starterIndex],
			this.mainMenu[mainIndex]
		]
	}
}


let [main, secondary] = restaurant.categories;
console.log('------------------------** RESTAURANT **------------------------')
console.log('BEFORE SWAPPING');
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log('AFTER SWAPPING');
console.log(main, secondary);

// const temp = x;
// x = y;
// y = temp;

// console.log(x,y)


const edibles = ["food", "fruits"];

let [positionOne, positionTwo] = edibles;
console.log('------------------------** FRUITS **------------------------')
console.log('BEFORE SWAPPING');
console.log(positionOne, positionTwo);

[positionOne, positionTwo] = [positionTwo, positionOne];

console.log('AFTER SWAPPING');
console.log(positionOne, positionTwo);


console.log('------------------------** ORDERS **------------------------')
const [starter, mainCourse] = restaurant.orders(2, 0);
console.log(starter, mainCourse)


// Nested Array
console.log('------------------------** NESTED ARRAYS **------------------------')
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested;
// console.log(i, j)

const [i, , [j, k]] = nested;
console.log("Getting Nested Arrays")
console.log(i, j, k)


//Default values
const [p = 1, q = 1, r = 1] = [8, 9]; //very useful when getting data from apis
console.log(p, q, r) 