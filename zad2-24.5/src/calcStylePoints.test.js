const assert = require('assert');
const calcStylePoints = require('./calcStylePoints');

describe('calcStylePoints', () => {
    it('should return 57', () => {
        const actual = calcStylePoints( 19, 19.5, 19, 19, 19);

        const expected = 57;

        assert.equal(actual, expected);
    });
    it('should return 48', () => {
        const actual = calcStylePoints( 15.5, 16, 16, 16, 16.5);

        const expected = 48;

        assert.equal(actual, expected);
    });
})