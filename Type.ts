type User = {
   id: number;
   name: string;
   isactive: boolean;
 };

// // 2. Assign the type to as many variables as you want!
 let User1: User = { 
   id: 2, 
   name: "Bob",
    isactive: false
  };
let User2:User = {
  id: 5,
  name: "Peter",
  isactive: true
}


  console.log (User1 .name );
 console.log(User1. id );
 console.log (User1. isactive);
 console.log (User2. isactive);


