var map = [];
var visited = [];
var queue = [];
var start = [0, 0];

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

function fillMap() {

	for(var i=0; i<50; i++) {
		map.push("");
		for (var j=0; j<50; j++) {	
      if($('#y' + i + 'x' + j).css('background-color') == 'rgb(0, 128, 128)') {
        map[i] = map[i].concat("#");
      } else if ($('#y' + i + 'x' + j).css('background-color') == 'rgb(0, 0, 0)') {
      	map[i] = map[i].concat(" ");
      } else if ($('#y' + i + 'x' + j).css('background-color') == 'rgb(0, 0, 255)') {
      	map[i] = map[i].concat("S");
      } else {
      	map[i] = map[i].concat("E");
      }
		}
	}
}

function findPaths(pos) {
  var y = pos[0];
  var x = pos[1];

  // add current position to visited list
  visited.push(y); visited.push(x);

  //check if current space is an exit
  console.log("Current position is " + pos);
  document.getElementById("y" + y + "x" + x).style.backgroundColor = "red";
  if(map[y].charAt(x) == "E") {
    console.log("Found path");
    return true;
  } else {
    //check for validity of all directions, if valid, add to queue. Then, rerun findPaths.
    if(y-1 >= 0) {
      if (map[y-1].charAt(x) != "#" && checkVisited(y-1, x)) {
        queue.push(y-1); queue.push(x);
      }
    }
    if(y+1 < 50) {
      if (map[y+1].charAt(x) != "#" && checkVisited(y+1, x)) {
        queue.push(y+1); queue.push(x);
      }
    }
    if(x-1 >= 0) {
      if (map[y].charAt(x-1) != "#" && checkVisited(y, x-1)) {
        queue.push(y); queue.push(x-1);
      }
    }
    if(x+1 < 50) {
      if (map[y].charAt(x+1) != "#" && checkVisited(y, x+1)) {
        queue.push(y); queue.push(x+1);
      }
    }
    // recursion
    nextY = queue.shift();
    nextX = queue.shift();
    nextPos = [nextY, nextX];
    setTimeout(function () {
      document.getElementById("y" + y + "x" + x).style.backgroundColor = "pink";
      findPaths(nextPos);
    }, 200);
  }
}

function checkVisited(y, x) {
  for (var i=0; i<visited.length; i=i+2) {
    if (y == visited[i] && x == visited[i+1]) {
      return false;
    } 
  }
  return true;
}

$(document).ready(function() {
	createMaze();
  
  $("#y0x0").css('background-color', 'blue');
  $("#y49x49").css('background-color', 'yellow');
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

/*
TODO - Prevent overlapping of yellow and blue start and exit points.
*/ 