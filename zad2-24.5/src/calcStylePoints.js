const calcStylePoints = (styleNotes) => {
  let styleNotesArray = styleNotes.toString().split(',');

  function findAndRemoveMinMax(styleNotesArray) {
    let min = Math.min(styleNotesArray);
    let max = Math.max(styleNotesArray);

    styleNotesArray = styleNotesArray.filter(min);
    styleNotesArray = styleNotesArray.filter(max);

    return styleNotesArray
  }

  function addPoints(styleNotesArray) {
    styleNotesArray = styleNotesArray.reduce((a, b) => a + b, 0);
    return styleNotesArray;
  }
};

module.exports = calcStylePoints;