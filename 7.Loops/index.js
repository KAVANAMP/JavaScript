//A loop is used to execute a block of code repeatedly until a condition becomes false.
// for loop -> A for loop is a control structure in JavaScript used to repeat a block of code a specific number of times.
let movies =["Sitha Ramam","RRR","KGF"]
for(let i =0;i<movies.length;i++){
    console.log(movies[i]);
    
}

let b=movies.map((item,index)=>console.log(item))
for(const element of movies){
    console.log(element);
    
}


let c= movies.forEach((item,index)=>{
    console.log(item);
    
})

//while loop -> A while loop repeats code as long as the condition is true.
let i=1;
while(i<=5){
    console.log(i);
    i++;
    
}

//do while -> it executes the code at least once, even if the condition is false.
let j= 1;
do{
    console.log(j);
    j++;
    
}while(j<=5);