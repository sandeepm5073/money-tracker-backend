const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb+srv://sandeep5073:8355066809@cluster0.kslm5rp.mongodb.net/Money-tracking')
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}