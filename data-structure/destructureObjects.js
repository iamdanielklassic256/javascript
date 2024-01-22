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
	orderDelivery: function(obj){
		console.log(obj)
	}
}

restaurant.orderDelivery({
	time: '22:30',
	address: "Olayolong",
	mainIndex: 2,
	starterIndex: 2
})
const { name, categories, openingHours } = restaurant;
const {menu = [], starterMenu: starters = [], } = restaurant;
console.log(menu, starters)


const {fri: {open: timeIn, close: timeOut}} = restaurant.openingHours;
console.log(timeIn, timeOut)