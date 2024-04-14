#! /usr/bin/env node
// OBJECT:
// Eg:
let user={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
}
console.log(user);

let user1={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
}
console.log(user1.lname)

// USE ARRAY IN OBJECT:
let user2={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
}
console.log(user2.hobbies)

//  USE FUNCTION IN OBJECT:
let user3={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
    salary:()=> (4555566),
}
console.log(user3.salary());

// CAN GET VALUE OUTSIDE THE OBJECT:
let user4:any={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
}
user4.email="abc @gamil.com",
user4.address="765 1-block",
console.log(user4);

// CAN DELETE VALUE FROM THE OBJECT:

let user5:any={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
    email:"abc @gmail.com",
    salary:()=> 4555566
}
delete user5.hobbies
console.log(user5);

// CAN ALSO EXCESS OBJECT IN OBJECT:
let user6:any={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
    email:"abc @gmail.com",
    office:{
        name:"IT mate",
        address:"abc IT 3-block",
    }
}

console.log(user6.office);
console.log(user6.office.name)

// USE FOR LOOP IN OBJECT:
let user7:any={
    fname:"hooriya",
    lname:"M.fareed",
    age:17,
    hobbies:["football","circket","gaming"],
    email:"abc @gmail.com",
}
for (let key in user7){
    console.log(key + ":" + user7[key]);
};

// MATH OBJECT:
// ROUND,FLOOR,CEIL,TRUNC,SQRT,POW,MIN,MAX:
// ROUND:
// Eg:
let value1:number=Math.round(14.6)
console.log(value1);
// ROUND:
let value2:number=Math.round(14.3)
console.log(value2);

// floor:
// Eg:
let value3:number=Math.floor(14.6)
console.log(value3);

// ceil:
// Eg:
let value4:number=Math.ceil(13.4)
console.log(value4);

// trunc:
// Eg:
let value5:number=Math.trunc(18.8779)
console.log(value5);

// pow:
// Eg:
let value6:number=Math.pow(3,2)
console.log(value6);

// sqrt:
// Eg:
let value7:number=Math.sqrt(46)
console.log(value7);

// min:
// Eg:
let value8:number=Math.min(9808,9000,455,887,10000)
console.log(value8);

// max:
// Eg:
let value9:number=Math.max(67,888,4567,9865,10000,7777)
console.log(value9);
