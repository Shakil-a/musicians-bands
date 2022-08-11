const {Sequelize, sequelize, DataTypes} = require('./db');

// TODO - define the Band model
let Band = db.define('restaurant', {
    name: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
})

module.exports = {
    Band
};