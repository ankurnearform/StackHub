// Restaurant JS Code

// Importing the DataModel
const DataModel = require('./DataModel');

// Restaurant class
class Restaurant {
    constructor(name, location, cuisine) {
        this.name = name;
        this.location = location;
        this.cuisine = cuisine;
        this.menu = new DataModel([]);
    }

    // Method to add a dish to the menu
    addDish(dish) {
        const currentMenu = this.menu.getData();
        currentMenu.push(dish);
        this.menu = new DataModel(currentMenu);
    }

    // Method to get the restaurant's menu
    getMenu() {
        return this.menu.getData();
    }

    // Method to get restaurant information
    getRestaurantInfo() {
        return {
            name: this.name,
            location: this.location,
            cuisine: this.cuisine
        };
    }
}

module.exports = Restaurant;

// Example of using the Restaurant class
const restaurant = new Restaurant('Chez Panisse', 'Berkeley, CA', 'French');
restaurant.addDish({name: 'Coq au Vin', price: 25});
restaurant.addDish({name: 'Bouillabaisse', price: 30});

console.log(restaurant.getMenu());
console.log(restaurant.getRestaurantInfo());