const calcDistancePoints = (distance, hillSize, kPoint) => {
    let hillType;
    let differencePoints;
    let kPointBase;
    let calculatePoints;

    //Difference between distance and kPoint
    differencePoints = distance - kPoint

    //Typing hillType
    if (hillSize >= 85 && hillSize < 110) {
        hillType = 'normal';
    } else if (hillSize >= 110 && hillSize < 185) {
        hillType = 'large';
    } else if (hillSize >= 185) {
        hillType = 'mamut';
    }

    //kPoint to calculate the base points for every jump
    if (kPoint >= 185) {
        kPointBase = 120;
    } else {
        kPointBase = 60;
    }

    //Calculation points depending on the hillType
    switch (hillType) {
        case 'normal':
            calculatePoints = differencePoints * 2
            break;
        case 'large':
            calculatePoints = differencePoints * 1.8
            break;
        case 'mamut':
            calculatePoints = differencePoints * 1.2
            break;
    }

    //Amount points depenfing on the hillType with the base for the jump
    calculatePoints = calculatePoints + kPointBase;

    return calculatePoints;
};

module.exports = calcDistancePoints;