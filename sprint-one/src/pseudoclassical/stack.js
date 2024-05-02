var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var currentSize = 0;
  for (var key in this.storage) {
    currentSize++;
  }
  this.storage[currentSize + 1] = value;
};

Stack.prototype.pop = function() {
  var currentSize = 0;
  for (var key in this.storage) {
    currentSize++;
  }
  var valueToBeRemoved = this.storage[currentSize];
  delete this.storage[currentSize];
  return valueToBeRemoved;
};

Stack.prototype.size = function(value) {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};

var stack = new Stack();




