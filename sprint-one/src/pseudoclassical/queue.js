var Queue = function() {
  this.storage = {};
};

Queue.prototype.dequeue = function() {
  var currentSize = 0;
  for (var key in this.storage) {
    currentSize++;
  }
  var smallestKey = currentSize;
  for (var key in this.storage) {
    if (parseInt(key) < smallestKey) {
      smallestKey = parseInt(key);
    }
  }
  var DequeueValue = this.storage[smallestKey];
  delete this.storage[smallestKey];
  return DequeueValue;
};

Queue.prototype.enqueue = function(value) {
  var currentSize = 0;
  for (var key in this.storage) {
    currentSize++;
  }
  var LargestKey = currentSize;
  for (var key in this.storage) {
    if (parseInt(key) > LargestKey) {
      LargestKey = parseInt(key);
    }
  }
  this.storage[LargestKey + 1] = value;
};

Queue.prototype.size = function() {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
};

var queue = new Queue();




