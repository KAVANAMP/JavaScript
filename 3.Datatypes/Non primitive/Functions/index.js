//Syntax -> function functionName(){ statements }

//Ananomous function -> Function with no name

let greet = function(){
    console.log("hello");
};
greet();


//Named function -> a function with name

function hello(){
    console.log("Hi how are you ??");
    
};
hello();


//Function with expression -> complete function storing in a variable
let say = function(){
    console.log("hello");
};
say();

//Immediate invoke function -> wrapping in () and calling immediately

(function(){
    console.log("hello dr");
    
})
();

//Arrow function -> An arrow function is a shorter way to write functions introduced in ES6 (ECMAScript 2015)
const gret=()=>{
    console.log("hello,i am fine");
    
}
gret();

//ex2:
const add=(a,b)=>{
    return a+b;
}
console.log(add(10,20));

// Currying function -> Currying is a technique where a function with multiple arguments is converted into a sequence of functions, where each function takes one argument.
//withou currying ex:

/*function addition(a,b,c){
    return a+b+c;
}
console.log(addition(1,4,6));*/

// with currying

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};
console.log(addition(50)(10)(5));
