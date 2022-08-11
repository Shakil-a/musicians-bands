const { db } = require('./db');
const {DataTypes } = require('sequelize');

let Song = db.define('song', {
    name: {
        title: DataTypes.STRING
    },
    instrument: {
        year: DataTypes.NUMBER
    },
})










module.exports = {
    Song
};