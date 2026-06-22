//if condition -> only true condition will print
let age = 24;
if(age >=18){
    console.log("eligible for voting");
    
}

//ifelse ->if condition is false then else condition will execute
let num = 24;
if(num%2==0){
    console.log("even number");  
}
else{
    console.log("odd number");
    
}

//else if condition -> if first condition is false then it will check for next condition
let babyAge = 4;
if(babyAge===5){
    console.log("join LKG"); 
}
else if(babyAge===6){
    console.log("join UKG");
}
else if(age< 3){
    console.log("let him enjoy");
    
}
else{
    console.log("join 1st std");
    
}

//Switch case -> it is used when we have multiple condition to check but in key value format
let time=17;
switch(time){
    case 1:
        console.log("good morning");
        break;

    case 4:
        console.log("good afternoon");
        break;

    default:
        console.log("give valid time");
        break;
        
 
}