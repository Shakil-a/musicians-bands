const {db} = require('./db');
const {Band, Musician, } = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
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
        await db.sync({force: true})
        const testMusician = await Musician.create({
            name:'Ted Wheeran',
            instrument: 'the triangle'})
            expect(testMusician.name).toEqual('Ted Wheeran');
            expect(testMusician.instrument).toEqual('the triangle');
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

     test('test band has many musicians', async () => {
        await db.sync({force: true})
        const makeMusician = await Musician.create({
        name:'Ted Wheeran',
        instrument: 'the triangle'})

        const makeBand = await Band.create({
            name:'bootles',
            genre: 'country music' 
        })

        await makeBand.addMusician(makeMusician)
        const triangle = await makeBand.getMusicians()
        expect(triangle instanceof Musician).toBeTruthy
    })

    test.only('Band has songs', async () => {
        await db.sync ({force: true})

        const aBand = await Band.create({
            name: 'no direction',
            genre: 'rap'

        })

        const aSong = await Song.create({
            title: 'just keep swimming',
            year: 2008
        })
    })

    await aBand.addSong(aSong)
    const something = await getBand.aSong()
    expect(something instanceof Song).toBeTruthy
}) 
