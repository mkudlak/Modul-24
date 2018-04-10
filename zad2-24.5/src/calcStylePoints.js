function calcStylePoints(styleNotes) {
    let result = 0;
    let min = Math.min(...styleNotes);
    console.log('min to ' + min)
    let max = Math.max(...styleNotes);
    console.log('max to ' + max);

    return styleNotes.reduce((a, b) => a + b) - (max + min);
};

module.exports = calcStylePoints;