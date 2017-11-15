var maze = ["############S##############",
            "#     ###### #            #",
            "#     #      #            #",
            "#     # ######            #",
            "#     # #                 #",
            "#     # #                 #",
            "#     # ###################",
            "#     #                   E",
            "#     #####################",
            "#                         #",
            "#                         #",
            "#                         #",
            "#                         #",
            "#                         #",
            "#                         #",
            "#                         #",
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
  findPaths(start);
}

function findPaths(y, x) {
  var next = [];

  // add current position to visited list
  visited.push(y); visited.push(x);

  //check if current space is an exit
  if(maze[y].charAt(x) == "E") {
    return true;
  } else {
    //check for validity of all directions, if valid, add to queue. Then, rerun findPaths.
  }
  
}

function checkVisited(y, x) {
  for (var i=0; i<visited.length; i=i+2) {
    if (y == visited[i] && x == visited[i+1]) {
      return true;
    } 
    return false;
  }
}

parseMap(maze);