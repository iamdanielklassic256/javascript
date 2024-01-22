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
	openingHours: {
		thur: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0,
			close: 24
		}
	},
	orders: function (starterIndex, mainIndex) {
		return [
			this.starterMenu[starterIndex],
			this.mainMenu[mainIndex]
		]
	},
	orderDelivery: function (obj) {
		console.log(obj)
	}
}


const arr = [7, 8, 9];


const newArr = [1, 2, ...arr]
console.log(newArr)



const newMenu = [...restaurant.mainMenu, 'Pork Chop'];
console.log(newMenu);


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)