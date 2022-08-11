const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./song')

Musician.belongsTo(Band)
Band.hasMany(Musician)

Song.belongsTo(Band)
Band.hasMany(Song)


module.exports = {
    Band,
    Musician,
    Song
};
