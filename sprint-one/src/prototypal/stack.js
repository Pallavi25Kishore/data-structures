var Stack = function() {
  var instanceStack = Object.create(stackMethods);
  instanceStack.storage = {};
  return instanceStack;
};

var stackMethods = {
  push: function(value) {
    var size = 0;
    for (var key in this.storage) {
      size++;
    }
    this.storage[size + 1] = value;
  },
  pop: function() {
    var size = 0;
    for (var key in this.storage) {
      size++;
    }
    var itemToRemove = this.storage[size];
    delete this.storage[size];
    return itemToRemove;
  },
  size: function() {
    var size = 0;
    for (var key in this.storage) {
      size++;
    }
    return size;
  }
};


