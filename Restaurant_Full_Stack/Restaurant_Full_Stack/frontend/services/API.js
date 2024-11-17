```javascript
// Restaurant API service to interact with backend for restaurant-specific data
const RestaurantAPI = {
    getRestaurants: async () => {
        const response = await fetch('/api/restaurants');
        return response.json();
    },
    createRestaurant: async (restaurantData) => {
        const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(restaurantData)
        });
        return response.json();
    },
    getMenus: async (restaurantId) => {
        const response = await fetch(`/api/restaurants/${restaurantId}/menus`);
        return response.json();
    },
    createMenu: async (restaurantId, menuData) => {
        const response = await fetch(`/api/restaurants/${restaurantId}/menus`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(menuData)
        });
        return response.json();
    },
    getReservations: async (restaurantId) => {
        const response = await fetch(`/api/restaurants/${restaurantId}/reservations`);
        return response.json();
    },
    createReservation: async (restaurantId, reservationData) => {
        const response = await fetch(`/api/restaurants/${restaurantId}/reservations`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reservationData)
        });
        return response.json();
    }
}

export default RestaurantAPI;
```