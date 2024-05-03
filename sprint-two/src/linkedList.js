var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var createNode = Node(value);
    if (list.head === null) {
      list.head = createNode;
    }
    if (list.tail === null) {
      list.tail = createNode;
    } else {
      list.tail.next = createNode;
      list.tail = createNode;
    }
  };

  list.removeHead = function() {
    var formerHeadValue = list.head.value;
    list.head = list.head.next;
    return formerHeadValue;
  };

  list.contains = function(target) {
    var searchResult = false;
    var search = function(target, obj) {
      if (obj.value === target) {
        searchResult = true;
      } else if (obj.next !== null) {
        search(target, obj.next);
      }
    };
    search(target, list.head);
    return searchResult;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail - O(1); constant time complexity
removeHead - O(1); constant time complexity
contains - O(n); linear time complexity
 */
