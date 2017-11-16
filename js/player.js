import {Actor} from "./../js/actor.js";
import {Item} from "./../js/item.js";

class Player extends Actor {
  constructor(name , type) {
    switch (type) {
      case 1:
          let hp_mod =1.2 ;
          let sta_mod=1   ;
          let ap_mod =1   ;
      break;
      case 2:
          let hp_mod =1   ;
          let sta_mod=1.2 ;
          let ap_mod =1   ;
      break;
      case 3:
          let hp_mod = 1  ;
          let sta_mod= 1  ;
          let ap_mod = 1.2;
      break;
      default:
          let hp_mod = 1  ;
          let sta_mod= 1  ;
          let ap_mod = 1  ;
    }


    super(name,)
  }
}
