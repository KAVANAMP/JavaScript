//Timers - Timers allow JavaScript to execute code after a specified delay or repeatedly at regular intervals.
/*
JavaScript provides two main timer functions:

setTimeout()
setInterval()

To stop them:

clearTimeout()
clearInterval()
*/

//1.setTimeout() - executes a function only once after a specified delay.
//Syntax:setTimeout(function, delay);
setTimeout(()=>{
    document.write("Thank you")
},2000)


//setInterval() -repeatedly executes a function after every specified interval.
//Syntax:setInterval(function, delay);
setInterval(() => {
    console.log("Hello");
}, 1000);