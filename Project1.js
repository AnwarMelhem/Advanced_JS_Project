//***************** this is Hotel Class *****************
class Hotel{
   address;
   numberOfRooms;
   #minFloor;
   #maxFloor;
   rooms =[];
   constructor(address,numberOfRooms,rooms){
    this.address=address;
    this.numberOfRooms=numberOfRooms;
    this.rooms=rooms
   }
   //Getter Function
   get MinFloor(){
    return this.#minFloor;
   }
   get MaxFloor(){
    return this.#maxFloor;
   }
   // Settter Function
   set MinFloor(x){
    this.#minFloor=x;
   }
   set MaxFloor(x){
    this.#maxFloor=x
   }
  // printAdvertismen Function
   printAdvertismen(){
    console.log("The Hotel Address is: "+this.address+" *** "+"Number of rooms is:"+this.numberOfRooms+" *** "+"Rooms:"+"Rooms"+ JSON.stringify(this.rooms)) ;
   }
  // listBookedRooms Function
   listBookedRooms(){
    console.log("this is list of Booked Rooms:")
    for(var i=0;i<this.rooms.length;i++){
        if(this.rooms[i].isBooked==false){
            console.log(this.rooms[i])
        }
    }
   }
}
//***************** this is Hotel Class *****************
class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum,roomNum,price,isBooked){
     this.floorNum=floorNum;
     this.roomNum=roomNum;
     this.price=price;
    this.#isBooked=isBooked;
    }
    // Setter and Getter Function
    get isBooked(){
        return this.#isBooked;
    }
    set isBooked(x){
    this.#isBooked=x;
    }
    // Book Function
    book(){
        if(this.isBooked==false){
            this.isbooked==true;
            console.log("Booked room number "+this.roomNum+"successfully")
        }
        else{
            console.log("Sorry! the room"+this.roomNum+" have already booked")
        }
    }
    // IsBooked Function
    IsBooked(){
        var isbookedvar=this.#isBooked;
        console.log("Is room number" +this.roomNum+"Booked:"+isbookedvar)
        
    }

}
// class RoomWithView inheritance class Room
class RoomWithView extends Room{
    view;
    numberOfBeds;
    constructor(floorNum,roomNum,price,view,numberOfBeds){
         super(floorNum,roomNum,price);
        this.view=view;
        this.numberOfBeds=numberOfBeds;
    }
}
// class Sleeping inheritance class Room
class SleepingRoom extends Room{
 personCapacity;
 constructor(floorNum,roomNum,price,personCapacity){
    super(floorNum,roomNum,price);
   this.personCapacity=personCapacity
 }
}
//**************************************************************************/
//**************************************************************************/
//**************************************************************************/
const Room1InHotel1=new Room(1,"100",650);
Room1InHotel1.isBooked=false;
const Room2InHotel1=new Room(1,"101",750);
Room2InHotel1.isBooked=false;
const Room3InHotel1=new Room(1,"103",850);
Room3InHotel1.isBooked=false;
const Room4InHotel1=new Room(1,"104",950);
Room4InHotel1.isBooked=false;
const Room5InHotel1=new Room(1,"105",650);
Room5InHotel1.isBooked=true;
const Room6InHotel1=new Room(1,"106",750);
Room6InHotel1.isBooked=true;
const Room7InHotel1=new Room(1,"107",850);
Room7InHotel1.isBooked=true;
const Room8InHotel1=new Room(1,"108",950);
Room8InHotel1.isBooked=true;

const Hotel1= new Hotel("Jenin",5,[Room1InHotel1,Room2InHotel1,Room3InHotel1,Room4InHotel1,Room5InHotel1,Room6InHotel1,Room7InHotel1,Room8InHotel1]);
Hotel1.MinFloor=0;
console.log(Hotel1.MinFloor);
Hotel1.MaxFloor=10;
console.log(Hotel1.MaxFloor);
console.log(Hotel1);
Hotel1.printAdvertismen();
Hotel1.listBookedRooms();
Room4InHotel1.book();
Room5InHotel1.book();
Room3InHotel1.IsBooked();
Room8InHotel1.IsBooked();
const View1=new RoomWithView(1,"103",850,"beach View",2);
console.log(View1)
const Capacity1=new SleepingRoom(1,"103",850,2);
console.log(Capacity1);
const View2=new RoomWithView(1,"104",850,"Mounten View",5);
console.log(View1)
const Capacity2=new SleepingRoom(1,"104",850,5);
console.log(Capacity1);