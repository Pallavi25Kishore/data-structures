

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === String(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (key === String(node)) { // to remove all edges connecting this node
      for (var i = 0; i < this[key].length; i++) {
        var indexOfKey = this[this[key][i]].indexOf(key);
        this[this[key][i]].splice(indexOfKey, 1);
      }
      delete this[key];
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].indexOf(String(toNode)) !== -1) {
    if (this[toNode].indexOf(String(fromNode)) !== -1) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  toNode = String(toNode);
  fromNode = String(fromNode);
  var fromNodeArray = this[fromNode];
  var toNodeArray = this[toNode];
  fromNodeArray[fromNodeArray.length] = toNode;
  toNodeArray[toNodeArray.length] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeArray = this[fromNode];
  var toNodeArray = this[toNode];
  var toNodeIndex = fromNodeArray.indexOf(toNode);
  var fromNodeIndex = toNodeArray.indexOf(fromNode);
  fromNodeArray.splice(toNodeIndex, 1);
  toNodeArray.splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


