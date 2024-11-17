// Restaurant reservation system using the DatabaseService

const DatabaseService = require('./DatabaseService');

class RestaurantReservation {
    static reservations = [];

    static createReservation(userId, reservationDetails) {
        const user = DatabaseService.findUserById(userId);
        if (!user) {
            console.error('User not found');
            return;
        }
        const reservation = {
            id: this.reservations.length + 1,
            userId: userId,
            details: reservationDetails
        };
        this.reservations.push(reservation);
        console.log('Reservation created:', reservation);
    }

    static getReservationsByUserId(userId) {
        return this.reservations.filter(reservation => reservation.userId === userId);
    }

    static cancelReservation(reservationId) {
        const index = this.reservations.findIndex(reservation => reservation.id === reservationId);
        if (index === -1) {
            console.error('Reservation not found');
            return;
        }
        this.reservations.splice(index, 1);
        console.log('Reservation cancelled:', reservationId);
    }
}

// Example usage
DatabaseService.addUser({ id: 3, name: "Charlie" });
RestaurantReservation.createReservation(3, { date: "2021-04-30", time: "7:00PM", table: 5 });
const charlieReservations = RestaurantReservation.getReservationsByUserId(3);
console.log(charlieReservations);
RestaurantReservation.cancelReservation(1);

module.exports = RestaurantReservation;