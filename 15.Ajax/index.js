//AJAX - AJAX (Asynchronous JavaScript and XML) is a technique used to send and receive data from a server asynchronously without reloading the entire webpage. -or- without reloading it updates the page.

//Synchronous - Executes line by line
//Asynchronous - Does not wait for completion or do not block the execution of the code.

//Technologies Used in AJAX
/*AJAX is not a programming language.

It is a combination of:

HTML
CSS
JavaScript
DOM
JSON/XML
HTTP
*/

//Ways to Perform AJAX
/*
There are three main ways:

1.XMLHttpRequest (Old)
2.Fetch API (Modern)
3.Axios (Library)
*/


function loads(){
     let request=new XMLHttpRequest()
     request.open('GET','./index.txt')
     request.send()
     request.onload=()=>{
        let para=document.getElementById('p1')
        para.innerText=request.responseText
     }
}