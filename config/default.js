const mongoose = require('mongoose');
const { DB_URL } = require('./db');

const connection = async () => {
    mongoose.connect(DB_URL, (error) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Database connected...');
        }
    })
}

module.exports = connection;