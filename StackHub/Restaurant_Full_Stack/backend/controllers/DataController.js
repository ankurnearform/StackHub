```javascript
// Importing necessary libraries
const express = require('express');
const router = express.Router();

// Controller code for fetching restaurant data
exports.getRestaurantData = (req, res) => {
    // Simulating fetching data from a database
    const restaurantData = {
        name: 'The Gourmet Kitchen',
        location: '123 Foodie Lane, Flavor Town',
        cuisine: 'International',
        rating: 4.5
    };
    res.json({ message: "Restaurant data fetched successfully.", data: restaurantData });
};

// Controller code for updating restaurant data
exports.updateRestaurantData = (req, res) => {
    // Simulating updating data in a database
    const updatedData = req.body;
    // Responding with a success message
    res.json({ message: "Restaurant data updated successfully.", updatedData });
};

// Routes for restaurant data operations
router.get('/restaurant-data', exports.getRestaurantData);
router.put('/restaurant-data', exports.updateRestaurantData);

// Exporting the router
module.exports = router;
```