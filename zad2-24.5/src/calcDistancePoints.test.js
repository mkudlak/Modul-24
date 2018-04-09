const assert = require('assert');
const calcDistancePoints = require('./calcDistancePoints.js');

describe('calcDistancePoints', () => {
    it('should return less points than 60 on normal type', () => {
        const actual = calcDistancePoints(99.5, 109, 98);

        const expected = 63;

        assert.equal(actual, expected);
    });
    it('should return more points than 60 on normal type', () => {
        const actual = calcDistancePoints(111, 109, 98);

        const expected = 86;

        assert.equal(actual, expected);
    });
    it('should return less points than 60 on mamut type', () => {
        const actual = calcDistancePoints(107.5, 134, 120);

        const expected = 37.5;

        assert.equal(actual, expected);
    });
    it('should return more points than 60 on mamut type', () => {
        const actual = calcDistancePoints(134, 134, 120);

        const expected = 85.2;

        assert.equal(actual, expected);
    });
});