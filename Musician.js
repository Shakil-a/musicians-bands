const {Sequelize, sequelize, DataTypes} = require('./db');

// TODO - define the Musician model
let Musician = db.define('restaurant', {
    name: {
        type: DataTypes.STRING
    },
    instrument: {
        type: DataTypes.STRING
    },
})

module.exports = {
    Musician
};