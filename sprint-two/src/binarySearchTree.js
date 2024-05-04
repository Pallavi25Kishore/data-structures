var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, binarytreeMethods);
  return tree;
};

var binarytreeMethods = {};

binarytreeMethods.insert = function(value) {
  var identifyRoot = function(obj, value) {
    if (value > obj.value) {
      if (obj.right === null) {
        obj.right = BinarySearchTree(value);
      } else if (obj.right !== null) {
        identifyRoot(obj.right, value);
      }
    } else if (value < obj.value) {
      if (obj.left === null) {
        obj.left = BinarySearchTree(value);
      } else if (obj.left !== null) {
        identifyRoot(obj.left, value);
      }
    }
  };
  identifyRoot(this, value);
};

binarytreeMethods.contains = function(value) {
  var search = false;
  var searchNodes = function(obj, value) {
    if (obj.value === value) {
      search = true;
      return;
    } else if (value > obj.value && obj.right !== null) {
      searchNodes(obj.right, value);
    } else if (value < obj.value && obj.left !== null) {
      searchNodes(obj.left, value);
    }
  };
  searchNodes(this, value);
  return search;
};

binarytreeMethods.depthFirstLog = function(callbackfunc) {
  var nodeTraverse = function(obj) {
    callbackfunc(obj.value);
    if (obj.left !== null) {
      nodeTraverse(obj.left);
    }
    if (obj.right !== null) {
      nodeTraverse(obj.right);
    }
  };
  nodeTraverse(this);
};

//additional function added to pass additional unit test
binarytreeMethods.depthOfNode = function(value) {
  var depth = 0;
  var searchNodes = function(obj, value) {
    depth++;
    if (obj.value === value) {
      return;
    } else if (value > obj.value && obj.right !== null) {
      searchNodes(obj.right, value);
    } else if (value < obj.value && obj.left !== null) {
      searchNodes(obj.left, value);
    }
  };
  searchNodes(this, value);
  depth = depth - 1; // assuming depth of root element/value is 0
  return depth;

};


/*
 * Complexity: What is the time complexity of the above functions?
insert - O(logn) logarithmic time complexity
contains- O(logn) logarithmic time complexity
depthFirstLog - O(n) linear time complexity
 */
