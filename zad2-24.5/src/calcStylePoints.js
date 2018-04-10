const calcStylePoints = (styleNotes) => {
    let min = Math.min(styleNotes);
    let max = Math.max(styleNotes);


  // function removeMinAndMax(styleNotes) {
  //   styleNotes = styleNotes.filter(min);
  //   styleNotes = styleNotes.filter(max);
  //   return styleNotes;
  // }

  function addPoints(styleNotes) {
    styleNotes = styleNotes.reduce((a, b) => a+b, 0);
    return styleNotes;
  }
};

module.exports = calcStylePoints;