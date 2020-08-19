const mongoose = require('mongoose');

const Weather = require('../models/weather');

module.exports = {};

module.exports.getByQuery = async (query) => {
    const location = await Weather.findOne({ name: query });
    if (location) {
        return location;
    } else {
        return false;
    }
}