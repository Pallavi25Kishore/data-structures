var Queue = function() {
  var instanceQueue = {};
  instanceQueue.storage = {};
  for (var key in queueMethods) {
    instanceQueue[key] = queueMethods[key];
  }
  return instanceQueue;
};

var queueMethods = {
  enqueue: function(value) {
    var currentSize = 0;
    for (var key in this.storage) {
      currentSize++;
    }
    var highestKey = currentSize;
    for (var key in this.storage) {
      if (parseInt(key) > highestKey) {
        highestKey = parseInt(key);
      }
    }
    this.storage[highestKey + 1] = value;
  },
  dequeue: function() {
    var currentSize = 0;
    for (var key in this.storage) {
      currentSize++;
    }
    var lowestKey = currentSize;
    for (var key in this.storage) {
      if (parseInt(key) < lowestKey) {
        lowestKey = parseInt(key);
      }
    }
    var itemToBeRemoved = this.storage[lowestKey];
    delete this.storage[lowestKey];
    return itemToBeRemoved;
  },
  size: function() {
    var currentSize = 0;
    for (var key in this.storage) {
      currentSize++;
    }
    return currentSize;
  }
};


