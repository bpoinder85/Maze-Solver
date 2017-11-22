var maze = ["############S##############",
            "#     ###### #            #",
            "#     #      #            #",
            "#     # ######            #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # ###################",
            "#     #                   E",
            "#     # ###################",
            "#     # #                 #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # #                 #",
            "###########################"];

var start;
var height = maze.length;
var width = maze[0].length;
var visited = [];
var queue = [];

function parseMap(map) {
  // find starting position
  for (var i=0; i<map.length; i++) {
    for (var j=0; j<map[i].length; j++) {
      if (map[i].charAt(j) == "S") {
        start = [i, j];
        document.getElementById("y" + i + "x" + j).innerHTML = "S";
      }
      document.getElementById("y" + i + "x" + j).innerHTML = map[i].charAt(j);
      if (map[i].charAt(j) == "#") {
        document.getElementById("y" + i + "x" + j).style.backgroundColor = 'black';
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
  if(maze[y].charAt(x) == "E") {
    console.log("Found path");
    return true;
  } else {
    //check for validity of all directions, if valid, add to queue. Then, rerun findPaths.
    if(y-1 >= 0) {
      if (maze[y-1].charAt(x) != "#" && checkVisited(y-1, x)) {
        queue.push(y-1); queue.push(x);
      }
    }
    if(y+1 < height) {
      if (maze[y+1].charAt(x) != "#" && checkVisited(y+1, x)) {
        queue.push(y+1); queue.push(x);
      }
    }
    if(x-1 >= 0) {
      if (maze[y].charAt(x-1) != "#" && checkVisited(y, x-1)) {
        queue.push(y); queue.push(x-1);
      }
    }
    if(x+1 < width) {
      if (maze[y].charAt(x+1) != "#" && checkVisited(y, x+1)) {
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

function drawMap() {
  var tableHTML = "";

  for (var i=0; i<height; i++) {
    tableHTML = tableHTML.concat("<tr>");
    for (var j=0; j<width; j++) {
      tableHTML = tableHTML.concat("<td class='cell' id='y" + i + "x" + j + "'></td>");
    }
    tableHTML = tableHTML.concat("</tr>");
  }

  document.getElementById("mazeTable").innerHTML = tableHTML;
}

drawMap();
parseMap(maze);
findPaths(start);
