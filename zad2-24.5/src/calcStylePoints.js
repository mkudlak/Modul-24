const calcStylePoints = (styleNotes) => {

  let styleNotesModify = styleNotes.filter( x => x != Math.max(...styleNotes));
	styleNotesModify = styleNotesModify.filter( x => x != Math.min(...styleNotes));	
	styleNotesModify = styleNotesModify.reduce((x, y) => x + y);
	return styleNotesModify
  
};

module.exports = calcStylePoints;