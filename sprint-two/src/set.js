var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

// adding additional function to pass unit test added additionally
setPrototype.countValues = function(value) {
  var counter = 0;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === value) {
      counter++;
    }
  }
  return counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
add - O(n) - linear time complexity
contains - O(n) - linear time complexity
remove - O(n) - linear time complexity
countValues - additionally added function to pass added unit test - O(n);
 */
