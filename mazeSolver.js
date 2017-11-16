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
var height;
var width;
var visited = [];
var queue = [];

function parseMap(map) {
  // find starting position
  for (var i=0; i<map.length; i++) {
    for (var j=0; j<map[i].length; j++) {
      if (map[i].charAt(j) == "S") {
        start = [i, j];
      }
    }
  }

  // find dimensions
  height = map.length;
  width = map[0].length;
}

function findPaths(pos) {
  var y = pos[0];
  var x = pos[1];

  // add current position to visited list
  visited.push(y); visited.push(x);

  //check if current space is an exit
  console.log("Current position is " + pos);
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
    findPaths(nextPos);
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

parseMap(maze);
findPaths(start);