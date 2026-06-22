//Arrays

let a = ['hello',true, null, function(){},{}];
console.log(a, typeof a);

let b = new Array()
console.log(b, typeof b);






let movies = ["KGF","RRR","Bahubali"]
console.log(movies);

//Push which helps to add data at end
let a = movies.push("Milana");
console.log(movies);

//Pop which helps to remove the data from the last index
let b = movies.pop()
console.log(movies);

//unShift which helps to add data at first inddex
let c = movies.unshift("Seetha Ramam");
console.log(movies);

//shift which helps to remove data at first index
let d = mpvies.shift()
console.log(movies);

//Map which helps to target each element and render also which helps to manipulate and return new array
let a = movies.map((value,index)=>console.log(value));

//Returns new array
let numbers = [1,2,3,4,5]
let f = numbers.map((value,index)=>value*2);
console.log(f);

//Remove unmatched element and return new array
let g = numbers.filter((value,index)=>value>3);
console.log(g);

//Remove unwanted element return first satisfied value
let h = numbers.find((value,index)=>value>3);
console.log(h);

//Reduce array into single value
let i = numbers.reduce((prev,curr)=>{return prev+curr});
console.log(i);







