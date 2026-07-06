//Rest operator - Gather multiple elements -or- it collects the remaining elements into an array.




let [first,second,...others] =[1,2,3,4,5]
console.log(first);
console.log(second);
console.log(others);

let users={
    name:"Dhruthi",
    id:71,
    place:"bengaluru",
    age:28
}

const {name,id,...remaining}=users
console.log(name);
console.log(id);
console.log(remaining);






