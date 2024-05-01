var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var currentSize = 0;
    for (var key in storage) {
      currentSize++;
    }
    storage[currentSize + 1] = value;
  };

  someInstance.pop = function() {
    var currentSize = 0;
    for (var key in storage) {
      currentSize++;
    }
    var valueToBeRemoved = storage[currentSize];
    delete storage[currentSize];
    return valueToBeRemoved;
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
