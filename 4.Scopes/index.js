//Scope determines where a variable can be accessed or used in your code.
//types of scope

// 1).Global scope -> A variable can be accessed by anywhere in the code(ex:PM)
let username="Vinutha";
function display(){
    console.log(username);
    
}
display();

// 2).Local scope/Function scope -> A variable can be accessed only inside a specific block(ex:CM)
function greet(){
    let message="hello";
    console.log(message);
    
}
greet(); //prints hello bcs we are accessing inside function

/*function greet1(){
    let message1="hi";

}
console.log(mesaage1); // refference error bcs msg only exists inside greet1 function*/


// 3).Lexical scope -> A variable can be accessed by its own scope or from its parent scope
let name="golbal";

function outer(){
    let name="Outer";

    function inner(){
        console.log(name);
        
    }

    inner();
}
outer();