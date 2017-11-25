function createMaze() {
	var hyperString = "";

	for (var i=0; i<50; i++) {
		hyperString = hyperString.concat("<tr>");
		for (var j=0; j<50; j++) {
			hyperString = hyperString.concat("<td class='cell' id='y" + i + "x" + j + "'></td>");
		}
		hyperString = hyperString.concat("</tr>");
	}

	document.getElementById("mazeTable").innerHTML = hyperString;
}

$(document).ready(function() {
	createMaze();

	// Event handler for drawing paths.
  var isDown = false;
  var curID;

  $(document).mousedown(function() {
    isDown = true;
  })
  .mouseup(function() {
  	isDown = false;
  });

  $('.cell').mouseover(function () {
  	  curID = $(this).attr('id');
  	  if(isDown) {
  	  	$("#" + curID).css('background-color', 'black');
  	  }
    }
  );
});
