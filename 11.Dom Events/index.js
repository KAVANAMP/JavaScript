// Events - It is an action performed by the user -or- it is an action or occurances thet happens in the browser

//1.click - triggered when an element is clicked
let button = document.getElementById("btn");
button.addEventListener("click",function(){
    alert("button clicked");
});

//dblclick - triggered when the user double clicks
let doubleButton= document.getElementById("doubleBtn");
doubleButton.addEventListener("dblclick",function(){
    alert("Double clicked!");
})

//3.mouseover - riggered when the mouse pointer enters an element.
let mouseOver=document.getElementById("text");
mouseOver.addEventListener("mouseover", function () {
    this.style.color = "red";
});

//4.mouseout - Triggered when the mouse leaves an element.
let mouseOut=document.getElementById("text1");
mouseOut.addEventListener("mouseout",function(){
    this.style.color="green"
});


//5.mousemove - Triggered whenever the mouse moves over an element.
let mouseMove=document.getElementById("box");
mouseMove.addEventListener("mousemove",function(){
    console.log("Moving mouse..");
    
})

//6.keydown - Triggered when a key is pressed.
let key=document.getElementById("input");
key.addEventListener("keydown",function(){
    console.log("key pressed");
    
})

//7.keyup - Triggered when a pressed key is released.
let keyUp=document.getElementById("input1");
keyUp.addEventListener("keyup",function(){
    console.log("key Released");
    
})

//8.focus - Triggered when an element gains focus.
let focus=document.getElementById("username")
focus.addEventListener("focus", function () {
    this.style.backgroundColor = "yellow";
});

//9.blur - Triggered when an element loses focus.
let blur=document.getElementById("username1")
blur.addEventListener("blur", function () {
    this.style.backgroundColor = "white";
});

//10.submit - Triggered when a form is submitted.
let submit=document.getElementById("myForm")
submit.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted");
});

//11.load - Triggered when the page finishes loading.
let load=window.addEventListener("load", function () {
    alert("Page Loaded");
});

//12.resize - Triggered when the browser window is resized.
//13.scroll - Triggered when the page is scrolled.