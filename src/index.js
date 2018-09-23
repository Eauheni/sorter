class Sorter {
  constructor() {
    this.arr = [];
    this.DefaultComparator = (a, b) => a - b;
    this.compareFunction = this.DefaultComparator
  }

  add(element) {
    this.arr.push(element); 
  }

  at(index) {
    return this.arr[ index ];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr.slice();
  }

  sort(indices) {
    var temp =[];
    indices.sort(this.defaultCompareFunction);
    for (var i = 0; i < indices.length; i++) {
        if (indices[i] >= 0 && indices[i] < this.arr.length){
            temp.push(this.arr[ indices[i] ]);
        }
        else{
            console.log("Index: " + indices[i] + " outs of range!");
        }
    }
    
    var tempSize = temp.length;
    temp.sort(this.compareFunction);
    
    for (var i = 0; i < tempSize; i++) {
        this.arr[ indices[i] ] = temp.shift();
    };
  };
   

  setComparator(compareFunction) {
 if (compareFunction != null){
          this.compareFunction = compareFunction;
      } else {
          this.compareFunction = this.DefaultComparator
      }
  };
  
}

module.exports = Sorter;