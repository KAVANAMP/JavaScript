// 1.document.getElementById() - used to selec element by using its id.
let element = document.getElementById("heading");
console.log(element);


//2. document.getElementByClassName() - used to select element by using its classname.
let items = document.getElementsByClassName("text");
console.log(items);

//3. document.getElementsByTagName() - returns all element with the given tag.
let paragraphs=document.getElementsByTagName("p")


//4. document.querrySelector() - Returns the first matching element.
let p = document.querySelector(".text");
console.log(p);

//5.document.querySelectorAll() - Returns all matching elements.
let paragraphs = document.querySelectorAll(".text");

