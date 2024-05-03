var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  var searchResult = false;
  var search = function(arr, target) {
    arr.forEach(function(item) {
      if (item.value === target) {
        searchResult = true;
      } else if (item.children.length !== 0) {
        search(item.children, target);
      }
    });
  };
  search(this.children, target);
  return searchResult;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild - O(1); constant time complexity
contains - O(n); linear time complexity

 */
