const calcDistancePoints = require('./calcDistancePoints');
const calcStylePoints = require('./calcStylePoints');

const calcTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calcDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calcStylePoints(styleNotes);

    return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calcTotalPoints;