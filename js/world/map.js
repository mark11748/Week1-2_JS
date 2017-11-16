
//This property holds all defined rooms/locales with the first index as a way of seperating
//maps and the second index as a way of identifying the room in the identified map

class Map {
  constructor() {
    _roomList = new Array(new Array); /* [area][room].GetCells()[posX][posY] */

  }
 public  static List<List<Locale>> GetWorld(){return _roomList;}              /*returns a list of locale lists*/
 public static int  AddMapToWorld (List<Locale> map)                         /*Args : list of rooms | Out: map index number*/
 {_roomList.Add(map); return GetWorld().IndexOf(map);}
 public static int  AddAreaToMap (Locale room, int area)                     /*Args : room object + map index number | Out: room index number in the specified map*/
 {_roomList[area].Add(room); return _roomList[area].IndexOf(room);}

 public static int playerId=0;
}
