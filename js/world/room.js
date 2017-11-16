class Locale {
  constructor(name,id,cells=[]) {
    this.name  = name;
    this.id    = id;
    this.cells = cells;
    //this.events = events;
  }
  //WORKS BUT BE CAREFUL OF OBJECTS ASSIGNED BY REF. RATHER THAN VAL. :: use .copyOf() if avalible
  cellDebug = function(){
    //If room has been defined/not empty
    if (this.cells.length>0) {
      //this moves through the outter (x-axis) array of arrays
      this.cells.forEach(function(cell_X,x) {
        //this moves through the inner (y-axis) arrays
        cell_X.forEach(function(cell_Y,y) {
          //if array cell contains a Cell object
          if (typeof cell_Y === "object") {
            //if cell has coordinates already
            if (cell_Y.name.search("\\[") !== -1) {
              cell_Y.name = cell_Y.name.substring(0,cell_Y.name.search("\\["));
            }
            cell_Y.name = cell_Y.name + "[" + x.toString() + "," + y.toString() + "]";
          }
        })
      })
    }
  }
  addNorthRow = function () {
    //for each X position add a space to the start of the corresponding Y array
    this.cells.forEach(function (cell){cell.unshift(undefined);})
  };
  addSouthRow = function () {
    //for each X position add a space to the end of the corresponding Y array
    this.cells.forEach(function (cell){cell.push(undefined);})
  };
  addWestRow = function () {
    var width  = this.cells[0].length;
    //the x array grows from the left;
    this.cells.unshift(new Array (width));
    this.cells[0].forEach(function(cell){cell=undefined;});
  };
  addEastRow = function () {
    var width  = this.cells[0].length;
    var newMax = this.cells.length;
    //the x array grows from the right;
    this.cells.push(new Array (width));
    this.cells[newMax].forEach(function(cell){cell=undefined;});
  };
}
