import {Item} from "./../js/item.js";


//ES6 version of:
// function Actor(name,hp_max,etc.){}
// Actor.prototype.method(){};

export class Actor {
  constructor(name="[DEFAULT NAME]" , hp_max=100 , sta_max=100 , ap_max=100 , locale , cell) {
    this.name     = name;    //actor's name
    this.hp_max   = hp_max;  //base max hp
    this.hp       = hp_max;  //starting hp

    this.locale   = locale;
    this.cell     = cell;

    this.sta_max  = sta_max; //base max stamana
    this.sta      = sta_max; //starting stamana

    this.ap_max   = ap_max;  //base max ability points
    this.ap       = ap_max;  //starting ability points

    this.def_init  =  5;     //defence score before armor
    this.atk_init  =  5;     //attack score before weapon

    //entryies are arrays; entries requires property
    //stackSize() to determine length of itemStack array object
    this.inventory = new Array();
  }

  addToInventory(object){ if(object instanceof item){this.inventory.push(object);}}
  addToInventory(object){ if(object instanceof item){this.inventory.push(object);}}
}

// EXPORT KEYWORD REPLACES "export.exportName=class"
// instead of var name = require('path/to/sourceFile.js').exportName;
// import with "import { className1,className2,etc } from 'path/to/sourceFile.js';"
