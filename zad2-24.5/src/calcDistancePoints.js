const calcDistancePoints = (distance, hillSize, kPoint) => {
    let distancePoints;
    let hillType;
    let differencePoints;
    let kPointBase;
    let calculatePoints;
    
    if(distance%2 > 0.5) {
        distancePoints = Math.floor(distance) + 0.5;
        return distancePoints;
	} else {
        distancePoints = Math.floor(distance) + 1;
        return distancePoints;
	}

    //Typing hillType
    if (hillSize >= 85 && hillSize < 110) {
        hillType = 'normal';
    } else if (hillSize >= 110 && hillSize < 185) {
        hillType = 'large';
    } else if (hillSize >= 185) {
        hillType = 'mamut';
    }

    //kPoint
    if (kPoint >= 185) {
        kPointBase = 120;
        return kPointBase;
    } else {
        kPointBase = 60;
        return kPointBase;
    }

    //Amount of distancePoints and kPointBase
    differencePoints = distancePoints - kPoint

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

    calculatePoints = differencePoints + kPointBase;

    return calculatePoints;
};

module.exports = calcDistancePoints;