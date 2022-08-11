const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name:'bootles',
            genre: 'country music',})

        expect(testBand.name).toEqual('bootles')
        expect(testBand.genre).toEqual('country music')
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name:'Ted Wheeran',
            instrument: 'the triangle'})
            expect(testMusician.name).toEqual('Ted Wheeran');
            expect(testMusician.instrument).toEqual('the traingle');
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})