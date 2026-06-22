//Object is a datatype which stores data in key value pairs
// we can create object in 3 ways 1)Literals  2)new keyword  3)constructor function

//object.keys -> returns key of an array
const user = {
    name:"kavana",
    age:22,
    city:"shimogga"
};
console.log(Object.keys(user));

//object.values -> returns values of an array
const users = {
    name:"kavana",
    age:22,
    city:"shimogga"
};
console.log(Object.values(users));


//Object.entries -> returns both key value pair as nested arrays
const user2={
    name:"kavya",
    age:20
};
console.log(Object.entries(user2));


//Object.fromEntries -> converts array into object
const arr=[
    ["name","nivya"],
    ["age",22]
];
const user3=Object.fromEntries(arr);
console.log(user3);

//Object.freeze -> prevents modification of an object means no adding or editting
const user4={
    name:"Rithu"
}
Object.freeze(user4);

user4.name="Anu";
console.log(user4.name);

//Object.isFrozen -> checking wheather an obj is freeze or not
const user5={
    name:"Rithu"
}
Object.isFrozen(user4);


console.log(Object.isFrozen(user4));

//Object.seal -> prevents addition or deletion but allows modification
const user6={
    name:"Dhruthi"
};
Object.seal(user6);
user6.name="Deepthi";
user6.age=30;
console.log(user6);

//Object.isSeal -> cheks wheather an obj is sealed or not
const user7 = {
    name:"Rahul",
    age:22
};
Object.seal(user7);
console.log(Object.isSealed(user7));