         //   MORE INFO IN WORD DOCUMENT   //





// variables
// let and const and var

//    1 : conditions
// if else ( if is used to test the condition )

 const marks = 90;
 if (marks <90) {
    console.log("you are passed");
 }
 else {
    console.log("you are failed");
 }

//  multiple conditions ( if we add && it means we are setting the range like in the example the range is 0-33)

const hey = 22;
if (hey < 33 && hey >= 0) {
    console.log("fail");
    
}

// diff between if and else if statement 

//  if the (if) statement is true then it won't check the (else if)  statement even if it's true


//  and now if we use the if statement again and again like if () { }  if () {}if {} then it will check all the ifs one by one 


//  and now if we use the if statement first and then else {1} else {2} else{3} else {4} then it will check one by one and if the 2nd one is true then it won't check the 3rd and 4th one even if they're true


// you can use the if else statement as 

(marks >=30 ? console.log("pass") : console.log("fail"));

// 2 :switch statement 

const number = 10;

switch (number < 0) {
    case true:
        console.log("negative");
        break;
    case false:
        console.log("positive");
        break;
    default:
        console.log("zero");
}

// 3 : template literals

 const firstName = "john";
 const lastName = "smith";

 console.log ("Hello "+ firstName + " " +  lastName);   
//  or (easy method)
 
 console.log(`Hello ${firstName} ${lastName}`);



// 4 : loops  (for , while and do while)
         
         //  while(condition) loop (eska matlab hai ap tab tak ye kam karte rahein jab tak  ye while (condition) verify nahi ho jate )

         // do {} while (condition) [  ] here i must be defined outside the do while loop and in this loop first the work is done and then the condition is checked
         for (let i = 0; i < 10; console.log(i)) {
             i++;            
         }   


// 5 : object
const data = {
   marks: 50,
   name: "john",
   age: 25,
   gpa: 3.5,
   isPass: true,
   friends: ["john", "jane", "mary"],
   address: {
      street: "123 Main St",
      city: "New York",
      state: "NY"
   }
}

// if (data.isPass = true) {
//    for (var i = 0; i < data.friends.length; i++) {
//       console.log(data.friends[i]);
//    }
   
// }
// else {
//    console.log("no friends");
// }

if (data.isPass = true && data.gpa > 2.0 && data.address.city == "New York") {
   console.log("welcome");
}
else {
   console.log("sorry");
}




//  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const Nums = myNumbers.map((number) => {
//    return number + 10})
// console.log(Nums);

         //   MAPPPPPPPPPP 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a = arr.map( (binary) => {
   return binary.toString(2);
})
console.log(a);

// examples (map)


const users = [
{ firstName: "John", lastName: "Doe", age: 30 },
{ firstName: "Jane", lastName: "Doe", age: 25 },
{ firstName: "Bob", lastName: "Smith", age: 40 },
{ firstName: "Alice", lastName: "Smith", age: 40 }
];

const z = users.map( (x) =>  x.firstName + " " + x.lastName );
console.log(z);
 

        //   FILTERRRRR

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const b = arr1.filter( (x) => {
   return x % 2 == 0;
})
console.log(b);

// examples (filter & map )

const op = users.filter( (x) => 
x.age < 30) .map ( (x) => {
   return x.firstName
   
});
console.log(op);


 
         //   REDUCEEEEEEE

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   

const c = arr2.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
} ,0);
console.log(c); 


const arr3 = [15, 16 , 17, 18, 19, 10];

const d = arr3.reduce( (max , cv ) => {
if (cv > max) {
   max = cv;
}

return max;
}, 0);
console.log(d);


// example (reduce)

const output = users.reduce((acc, curr) => {
  if(acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output);



//  SORT 

         //  ascending order
const arr4 = [10, 2, 5, 7, 9, 1, 4, 6, 8];

const e = arr4.sort( (a, b) => {
    return a - b;
});
console.log(e);

//  descending order

const f = arr4.sort( (a, b) => {
    return b - a;
});
console.log(f);


   //   EXAMPLES CHAIN METHOD

    const marks1 = [40, 45, 36, 27, 17, 78, 56, 33, 56, 21];

    const sum5 = marks1
    .sort ( (a, b) => a - b)
    .filter( (x) => x > 35)
    .map ( (x) => x + 10)
    .reduce ( (a, b) => a + b, 0);
    console.log(sum5);

//             FOR EACH METHOD
const na = ["Ahmad" , "Alam" , "Nasir" , "Mansoor"];

const nm = na.forEach ( (x) => 
   console.log(x)
); 
// now if you want index too

na.forEach ( (x, index) => 
    console.log(index + " : " + x)
); 


//   REVERSE

na.reverse();
console.log(na);

//  FIND INDEX:-

const nam = [3, 5, 6, 7, 8, 9]

const ind = nam.findIndex( (x) => x === 8);
console.log(ind);


//       FIND
const persons  = [
   {
      name: "Ahmad",
      age: 30
   },
   {
      name: "Nasir",
      age: 25
   },
   {
      name: "Mansoor",
      age: 40 
   },
   {
      name: "Ali",
      age: 40
   },
];
const fi = persons.find( (x) => x.name === "Ahmad").age;
console.log(fi);

//         SOME 

const arr5 = [1, 2, 3, 4, 5];

const great4 = arr5.some ( (x) => x > 4);
console.log(great4);

const agead = persons.some ( (x) => x.age > 20);
console.log(agead);

//          EVERY

const arr6 = [18, 19, 19 , 20];

const gr6 = arr6.every( (x) => x >= 20);
console.log(gr6);


//  INDEX OF AND LASTINDEX OF

const arr7 = [18, 19, 19 , 20];

const ind7 = arr7.indexOf(19);
console.log(ind7);


const idx = arr7.lastIndexOf((19));
console.log(idx);


//   CONCATENATION/ JOIN

const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

const con = arr8.concat(arr9);
console.log(con); 



const arr10 = [1, 2, 3];
const arr11 = [4, 5, 6];
const arr12 = [7, 8, 9];
const arr13 = arr10.concat(arr11, arr12);
console.log(arr13);

var cons = arr13.join(' ');
console.log(cons);

//       FILL OPERATORS

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list.fill(10, 0, 9 );
console.log(list);


   //     ARRAY DESTRUCTURING

const nn = ["Ahmad", "Nasir", "Mansoor", "Ali"];

const [zero, one, two, three] = nn;
console.log(zero, one, two, three);
    
const student_list = {
    name: "John Doe",
    age: 25,
    marks:30,
    isPass: true,
    friends: ["John", "Jane", "Mary"],
    address: {
       street: "123 Main St",
       city: "New York",
       state: "NY"
    }
}

const {name, address} = student_list;

console.log(name);
console.log(address);

 

