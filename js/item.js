import {Actor} from "./../js/actor.js";

class Item {
  constructor(name , description,
              owner, posX, posY) {
    this.name        = name.toString();
    this.description = description.toString();
    this.owner       = owner; //refers to containing object

    if (Number.isInteger(posX)){ this.posX = posX; }
    else { this.posX = parseInt(posX); }
    if (Number.isInteger(posY)){ this.posY = posY; }
    else { this.posY = parseInt(posY); }
  }
  setOwner(owner) {
    if (owner instanceof Cell   ||
        owner instanceof Actor  ||
        owner instanceof Container)
        {this.owner=owner;}
  }
  setPos(x=null,y=null) {
    if (Number.isInteger(x)){this.posX = x;}
    if (Number.isInteger(y)){this.posY = y;}
  }
}
