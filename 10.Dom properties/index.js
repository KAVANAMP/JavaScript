// InnerHTML - It is a DOM property used to get or chage the HTML content inside an element,It can read or write the HTML tags
document.getElementById("demo").innerHTML="<b>Welcome</b>";


//IneerText - Changes only visible text
document.getElementById("demo").innerText="Welcome"

//textContent - returns all text,including hidden text.
console.log(document.querySelector("p").textContent);

//Changing CSS Styles
let p = document.getElementById("msg");

p.style.color = "red";
p.style.fontSize = "30px";
p.style.backgroundColor = "yellow";

//Changing Attributes
document.getElementById("image").src = "dog.jpg";

//Creating New Elements
let heading = document.createElement("h1");

heading.innerText = "JavaScript";

document.body.appendChild(heading);

//Removing Elements
let element = document.getElementById("demo");

element.remove();