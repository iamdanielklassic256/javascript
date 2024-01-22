
const bookings = []

const creatingBooking = function (flightNumber, numPassengers = 1, price = 199 * numPassengers) {

	const booking = {
		flightNumber,
		numPassengers,
		price
	}
	console.log(booking)
	bookings.push(booking)

}
creatingBooking("LH123")
creatingBooking("LH123", 40)
creatingBooking("LH123", undefined, 40)