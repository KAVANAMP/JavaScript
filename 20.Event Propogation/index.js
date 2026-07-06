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