//Event Propogation - It is the process by which an event travels through the DOM tree after an event occurs.

/* There are 3 methods:

1.Event capturing : the event travels from the parent element to the child element.
2.Event bubbling : After reaching the target element the event moves from child to parent element.
3.Event target phase : The event reaches the actual element that was clicked.

*/


console.log(document.getElementById("grandparent"));
console.log(document.getElementById("parent"));
console.log(document.getElementById("child"));


let data=document.getElementById("grandparent")
data.addEventListener("click",()=>{
    data.style.background="red"
    console.log("Data");
})

let papa=document.getElementById("parent")
papa.addEventListener("click",()=>{
    papa.style.background="green"
    console.log("papa");
    
})
let Beta = document.getElementById("child")
Beta.addEventListener("click",()=>{
    Beta.style.background="blue"
    console.log("beta");
})