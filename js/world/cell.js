class  Cell {
  constructor(name        = "[PLACEHOLDER_Cl_NAME]",
              description = "[PLACEHOLDER_DESC]",
              rm          = "[PLACEHOLDER_Rm_NAME]",
              n,s,e,w,
              items       = [])
  {
   //what's it's name?
   this.name=name;
   //room description goes bellow:
   this.description=description;
   this.rmName=rm;
   //is the direction passable? uses border object
   this.n=n;
   this.s=s;
   this.e=e;
   this.w=w;
   //does it have items?
   this.items=items;
  }
  //TESTED COPY FUNCTION
  copyOf = function(){
   var newCell = new Cell (this.name,this.description,this.rmName,
                           this.n.copyOf(),this.s.copyOf(),this.e.copyOf(),this.w.copyOf(),[]);
   return newCell;
  }
  //NEED TO TEST COPY FUNCTION
  copyOfItems = function(){
    var newCell = new Cell (this.name,this.description,this.rmName,
                           this.n.copyOf(),this.s.copyOf(),this.e.copyOf(),this.w.copyOf(),[]);
   //if old cell has items push them onto the items array of new cell
   if (this.items.length) {
     this.items.forEach(function(item){newCell.items.push(item.copyOf())});
   }
   return newCell;
  }
}
