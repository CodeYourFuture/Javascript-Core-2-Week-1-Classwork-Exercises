/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

let storeBranches = {
    glasgow: {
      manager: "Andrew",
      assistant: "Laura",
      interns: {
        head_intern: "Mozafar",
        intern: "James",
      },
    },
  
    edinburgh: {
      director: "Kelly",
      manager: "Sally",
      assistant: "Derek",
      interns: {
        head_intern: "John",
        intern: "Sarah",
      },
    },
  };
  
  // ONLY EDIT BELOW THIS LINE
  
  // # 1
  // prints [ 'glasgow', 'edinburgh' ]
  console.log(storeBranches.glasgow, storeBranches.edinburgh);
  
  // # 2
  // prints [ 'manager', 'assistant', 'interns' ]
  console.log(storeBranches.edinburgh.manager, storeBranches.edinburgh.assistant, storeBranches.edinburgh.interns);
  
  // # 3
  // prints [ 'head_intern', 'intern' ]
  console.log(storeBranches.glasgow.interns.head_intern, storeBranches.glasgow.interns.intern);
  
  // ONLY EDIT ABOVE THIS LINE