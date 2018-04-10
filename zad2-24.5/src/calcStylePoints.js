function calcStylePoints() {
    let result = 0;
    let min = Math.min(...arguments);
    console.log('min to ' + min)
    let max = Math.max(...arguments);
    console.log('max to ' + max);
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result - (min + max);
};



module.exports = calcStylePoints;