const assert = require('assert');
const calcTotalPoints = require('./calcTotalPoints');

describe('calcTotalPoints', () => {
    it('should return 109.2 on normal hillSize', () => {
        const actual = calcTotalPoints(99.5, 109, 98, [18.5, 18, 18, 18, 18], 3.2, -11);

        const expected = 109.2;

        assert.equal(actual, expected);
    });
    it('should return 131.8 on normal hillSize', () => {
        const actual = calcTotalPoints(111, 109, 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);

        const expected = 131.8;

        assert.equal(actual, expected);
    });
});