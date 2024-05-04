

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, v);
  var alreadyPresent = this._storage.get(index);
  if (alreadyPresent === undefined) {
    this._storage.set(index, [[k, v]]);
  } else if (alreadyPresent[0][0] === k) { //overwrite if same key
    this._storage.set(index, [[k, v]]);
  } else { //insert both vals if index of different keys happens to be same
    alreadyPresent.push([k, v]);
    var newValue = alreadyPresent;
    this._storage.set(index, newValue);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(index);
  var retrievedArrayOfArray = this._storage.get(index);
  if (retrievedArrayOfArray === undefined) {
    return undefined;
  }
  if (retrievedArrayOfArray.length === 1) { //when only single value present
    return retrievedArrayOfArray[0][1];
  } else {
    for (var i = 0; i < retrievedArrayOfArray.length; i++) {
      if (retrievedArrayOfArray[i][0] === k) { //multiple vals at same index
        return retrievedArrayOfArray[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cb = function(v, i, arr) {
    if (i === index) {
      if (arr[i].length === 1) {
        delete arr[i];
      } else { // if multiple values are present at same index
        for (var j = 0; j < arr[i].length; j++) {
          if (arr[i][j][0] === k) {
            arr[i].splice(j, 1);
          }
        }
      }

    }
  };
  this._storage.each(cb);
};


// Note: Have refactored the code to use arrays [k,v] as "values" to handle collision scenarios, but as instructed in glearn, have not used arrays to directly interact with the limited array instance - the array brackets in code are to interact with get, set or each methods.

/*
 * Complexity: What is the time complexity of the above functions?
insert - O(1) when no collision; O(n) when collision
retrieve - O(1) when no collision; O(n) when collision
remove - O(1) when no collision; O(n) when collision

 */


