class Border {
  constructor(edgeType) {
  this.type = edgeType;
  //CAN BE: wall(0)/open(1)/door(2)
  //this.isOpen   = false; OUT OF SCOPE -- too much work
  this.isLocked = false;
  this.isExit   = false;
  this.nextRoom = [];
  this.lockID   = -1;
  }
  //TESTED COPY FUNCTION
  copyOf  = function () {return new Border(this.type);} //TEST COPY FUNCTION
  setExit = function (newX,newY,roomIndex) {
  this.isExit=true;
  this.nextRoom[0]=newX;
  this.nextRoom[1]=newY;
  this.nextRoom[2]=roomList[roomIndex];
  }
  setLockID  = function (id) {
  if(typeof id == "number" && id < -1) {
    this.lockID=id;
    }
  }
}
