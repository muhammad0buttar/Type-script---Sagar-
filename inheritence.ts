class Resturant{

    eat() {
    console.log("Restaurant is serving food");
    }
}
//Now:
class Guest extends Resturant {

    Servefood() {
        console.log("Guest is making noise");
    }
}
//Create object:
let guest = new  Guest();

guest.eat();   // inherited
guest.Servefood();  // own method
