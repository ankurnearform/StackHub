// Restaurant class
class Restaurant {
    constructor(id, name, cuisine, location) {
        this.id = id;
        this.name = name;
        this.cuisine = cuisine;
        this.location = location;
    }
}

module.exports = Restaurant;

// Menu class
class Menu {
    constructor(id, restaurantId, items) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.items = items;
    }
}

module.exports = Menu;

// MenuItem class
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

module.exports = MenuItem;

// Order class
class Order {
    constructor(id, userId, restaurantId, items, totalPrice) {
        this.id = id;
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.items = items;
        this.totalPrice = totalPrice;
    }
}

module.exports = Order;

// Reservation class
class Reservation {
    constructor(id, userId, restaurantId, date, time, partySize) {
        this.id = id;
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.date = date;
        this.time = time;
        this.partySize = partySize;
    }
}

module.exports = Reservation;