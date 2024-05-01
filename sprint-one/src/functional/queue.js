var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var currentSize = 0;
    for (var key in storage) {
      currentSize++;
    }
    var LargestKey = currentSize;
    for (var key in storage) {
      if (parseInt(key) > LargestKey) {
        LargestKey = parseInt(key);
      }
    }
    storage[LargestKey + 1] = value;
  };

  someInstance.dequeue = function() {
    var currentSize = 0;
    for (var key in storage) {
      currentSize++;
    }
    var smallestKey = currentSize;
    for (var key in storage) {
      if (parseInt(key) < smallestKey) {
        smallestKey = parseInt(key);
      }
    }
    var DequeueValue = storage[smallestKey];
    delete storage[smallestKey];
    return DequeueValue;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };
  return someInstance;
};
