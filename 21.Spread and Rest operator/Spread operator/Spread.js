//Spread operator - copy or concatenate the array or object,syntax position anywhere

let a=[1,2,3]
let b=[...a]
console.log(b);

let aa=[1,2,3,4]
let bb=[5,6,7,8]
console.log([...aa,...bb]);

let user={
    eName:"Akhila",
    eId:84
}
let emp={...user}
console.log(emp);

