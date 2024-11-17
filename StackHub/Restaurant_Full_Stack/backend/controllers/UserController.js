```js
// Importing necessary libraries
const express = require('express');
const router = express.Router();

// Controller to manage restaurant data
exports.getRestaurants = (req, res) => {
    res.json([
        { id: 1, name: 'Pasta Palace', location: 'New York' },
        { id: 2, name: 'Burger Barn', location: 'Los Angeles' }
    ]);
};

exports.createRestaurant = (req, res) => {
    res.status(201).send({ message: "Restaurant created successfully." });
};

// Restaurant controller code
router.get('/restaurants', this.getRestaurants);
router.post('/restaurants', this.createRestaurant);

// Exporting the router
module.exports = router;
```